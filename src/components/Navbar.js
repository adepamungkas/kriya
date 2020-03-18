import React from 'react';
import {Link} from "react-router-dom";
import {fetchProducts} from "../redux";
import {connect} from "react-redux";


function Navbar ({  data }) {

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
                            <label> Total Order: <span className="badge badge-pill badge-danger">{data.totalOrder}</span> </label>


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


