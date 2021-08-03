import React from 'react';
import signlogo from "./images/pic1.jpg";

const Registration = () => {
    return (
        <>
            <section>
                <div className="contaienr my-5">
                    <div className="row">
                        <div className="col-10 col-md-6 mx-auto shadow-lg rounded-3 py-3 px-2">
                            <div className="row">
                                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
                                    <h3 className="fw-bold mb-3">Sign Up</h3>
                                    <form>
                                            <div className="form-group d-flex justify-content-center align-items-center my-2">
                                                <label for="name"><i className="me-1 zmdi zmdi-account"></i></label>
                                                <input type="text" className="form_inputs" id="name" name="name" autoComplete="off" aria-describedby="emailHelp" placeholder="Enter Name"/>
                                            </div>
                                            <div className="form-group d-flex justify-content-center align-items-center my-2">
                                                <label for="email"><i className="me-1 zmdi zmdi-email"></i></label>
                                                <input type="email" className="form_inputs" id="email" name="email" autoComplete="off" aria-describedby="emailHelp" placeholder="Enter Email"/>
                                            </div>
                                            <div className="form-group d-flex justify-content-center align-items-center my-2">
                                                <label for="phone"><i className="me-1 zmdi zmdi-phone"></i></label>
                                                <input type="Number" className="form_inputs" id="phone" name="phone" autoComplete="off" aria-describedby="emailHelp" placeholder="Enter Number"/>
                                            </div>
                                            <div className="form-group d-flex justify-content-center align-items-center my-2">
                                                <label for="password"><i className="me-1 zmdi zmdi-key"></i></label>
                                                <input type="text" className="form_inputs" id="password" name="password" autoComplete="off" aria-describedby="emailHelp" placeholder="Enter Password"/>
                                            </div>
                                            <div className="form-group d-flex justify-content-center align-items-center my-2">
                                                <label for="confirmpassword"><i className="me-1 zmdi zmdi-key"></i></label>
                                                <input type="text" className="form_inputs" id="confirmpassword" name="cpassword" autoComplete="off" aria-describedby="emailHelp" placeholder="Enter Confirm Password"/>
                                            </div>
                                        
                                           <div className="form-btn mt-4">
                                             <input type="submit" className="btn btn-primary" name="signup" id="signup" value="Submit" />
                                            </div>
                                     </form>
                                </div>
                                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                                    <figure>
                                        <img className="img-fluid" src={signlogo} alt="singuplogo" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Registration;