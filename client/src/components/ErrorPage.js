import React from 'react';
import {NavLink} from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div style={{height : "90vh"}} className="col-10 col-md-12 mx-auto d-flex justify-content-center align-items-center flex-column">
                        <h1 className="mb-4 fw-bold">OOP! This is Error page!</h1>
                        <NavLink className="btn btn-primary" to="/" ><i class="zmdi zmdi-home"></i> Go To Home</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;
