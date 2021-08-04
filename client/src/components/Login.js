import React from 'react';
import { NavLink } from 'react-router-dom';
import loginimg from "./images/pic2.jpg";

const Login = () => {
    return (
        <>
            <section>
                <div className="contaienr my-5">
                    <div className="row mx-0">
                        <div className="col-10 col-md-6 mx-auto shadow-lg rounded-3 py-3 px-2">
                            <div className="row">
                            <div className="img-div col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
                                    <figure>
                                        <img className="img-fluid" src={loginimg} alt="loginlogo" />
                                    </figure>
                                    <p><NavLink style={{fontSize : 12 , textDecoration : "none" ,color : "gray" }} to="/registration">Create An Account!</NavLink></p>
                                </div>
                                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
                                    <h3 className="fw-bold mb-4">Sign In</h3>
                                    <form>
                                           
                                            <div className="form-group d-flex justify-content-center align-items-center my-2">
                                                <label for="email"><i className="me-1 zmdi zmdi-email"></i></label>
                                                <input type="email" className="form_inputs" id="email" name="email" autoComplete="off" aria-describedby="emailHelp" placeholder="Enter Email"/>
                                            </div>
                                        
                                            <div className="form-group d-flex justify-content-center align-items-center my-4">
                                                <label for="password"><i className="me-1 zmdi zmdi-key"></i></label>
                                                <input type="password" className="form_inputs" id="password" name="password" autoComplete="off" aria-describedby="emailHelp" placeholder="Enter Password"/>
                                            </div>
                                        
                                           <div className="form-btn mt-4">
                                             <input type="submit" className="btn btn-primary" name="signup" id="signup" value="Submit" />
                                            </div>
                                     </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Login;