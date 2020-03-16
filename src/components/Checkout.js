import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts,addProduct,decrementProduct } from '../redux'

function MainPanel ({  data, fetchProducts,addProduct, decrementProduct }) {
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
        <hr/>
            <hr/>
            <h5> Selected Product</h5>
            <table className="table">

                <thead>
                <tr>
                    <th>NO</th>
                    <th>Product Name</th>
                    <th>QTY</th>
                </tr>
                </thead>
                {data &&
                data.product &&
                data.product.map((product,i )=>
                    <tbody>
                    <tr>
                        <td>{i}</td>
                        <td>{product.title}</td>
                        <td>0</td>
                    </tr>
                    </tbody>

                )}
            </table>


        </div>
    )
}



const mapStateToProps = state => {
    return {
        data: state.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addProduct:()=>dispatch(addProduct()),
        decrementProduct:()=>dispatch(decrementProduct())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPanel)
