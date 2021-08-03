import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/"><span className="text-success h3">M</span>earn-<span className="text-success h3">P</span>roject</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link text-dark" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-dark" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-dark" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-dark" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-dark" to="/registration">Registration</NavLink>
                        </li>
                     </ul>
                    </div>
                </div>
             </nav>
        </>
    )
};

export default Navbar;