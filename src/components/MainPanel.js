import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts,addProduct,decrementProduct } from '../redux'
import {Link} from "react-router-dom";

function MainPanel ({  data, fetchProducts,addProduct, decrementProduct,handleClick }) {
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


            <div className="text-right">
                <br/>

<label> </label>
                <Link to="/Checkout" className="btn pull-right btn-sm btn-success">Checkout </Link>
            </div>

            <table className="table">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>substraction</th>
                    <th>add more</th>
                </tr>
                </thead>
                <tbody>
                {
                    data &&
                data.product &&
                data.product.map((product,i )=>

                        <tr key={i} >
                            <td >{i}</td>
                            <td>{product.title}</td>
                            <td><button type="button" className="btn btn-sm btn-warning" value={product.title} onClick={decrementProduct}> decrease order (-) </button></td>
                            <td>
                                <button type="button" className="btn btn-sm btn-primary" value={product.title} onClick={()=>{addProduct(product.title)}}> increase order (+) </button></td>
                        </tr>


                    )}
                </tbody>
            </table>


        </div>
    )
}


const mapStateToProps = (state ) => {

    return {
        data: state.product,

    }
}



const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addProduct:(e)=>dispatch(addProduct(e)),
        decrementProduct:()=>dispatch(decrementProduct()),

    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPanel)
