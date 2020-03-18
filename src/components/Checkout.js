import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts,incrementProduct,buyProduct } from '../redux'
import {Link} from "react-router-dom";

function MainPanel ({  data,selected, fetchProducts, buyProduct }) {

    useEffect(() => {
        fetchProducts()
    }, [])

    return data.loading ? (
        <div className="container">
            <h5>Loading</h5>
        </div>
    ) : data.error ? (
        <h2>{data.error}</h2>
    ) : (
        <div className="container">
       <br/>
            <h5> Selected Product</h5>
            <table className="table">

                <thead>
                <tr>
                    <th>NO</th>
                    <th>Product Name</th>
                    <th>Qty</th>
                </tr>
                </thead>
                <tbody>
                {data &&
                data.product &&
                selected.map((e,i )=>

                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{e.item}</td>
                        <td>{e.qty}</td>
                    </tr>


                )}
                </tbody>
            </table>
            <div className="text-right">

                <Link to="/MainPanel" className="btn pull-right btn-sm btn-warning">Back </Link>
                &nbsp;
                <Link to="/MainPanel" onClick={buyProduct} className="btn pull-right btn-sm btn-success">Buy </Link>
            </div>

        </div>
    )
}


const mapStateToProps = state => {

    var selectedProduct =state.product.selectedProduct;
    var result_grouping = [];
    selectedProduct.reduce(function(res, value) {
        if (!res[value.item]) {
            res[value.item] = { item: value.item, qty: 0 };
            result_grouping.push(res[value.item])
        }
        res[value.item].qty += value.qty;
        return res;
    }, {});

    return {
        data: state.product,
        selected:result_grouping
    }

}


const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        incrementProduct:()=>dispatch(incrementProduct()),
        buyProduct:()=>dispatch(buyProduct())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPanel)
