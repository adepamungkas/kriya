import React, {useEffect, Component } from 'react';
import {Link} from "react-router-dom";
import {fetchProducts} from "../redux";
import {connect} from "react-redux";


function Navbar ({  data }) {
console.log('ini data',data.totalOrder)
    return (
        <div className="container">

            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">

                            <Link to="/" className="nav-link">Home </Link>
                        </li>

                        <li className="nav-item active">

                            <Link to="/User" className="nav-link">User </Link>
                        </li>



                    </ul>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button type="button" className="btn btn-danger btn-sm">
                                Total Order:  <span className="badge badge-light">{data.totalOrder}</span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <Link to="/Checkout" className="btn  btn-sm btn-outline-warning">Checkout </Link>
                        </li>
                    </ul>
                </div>
            </nav>

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
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)


