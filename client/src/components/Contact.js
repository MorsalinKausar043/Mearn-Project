import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="container pb-3">
                <div className="row">
                    <div className="col-10 col-md-12 mx-auto">
                        <div className="row ">
                            <div className="col-12 col-md-10 my-5 mx-auto">
                                <div className="row g-3 ">
                                    <div className="col ">
                                        <div className="d-flex justify-content-justify-content-around align-items-center  p-3  shadow rounded-3">
                                        <div className="left-site">
                                        <i class="me-3 lead text-primary zmdi zmdi-smartphone-iphone"></i>
                                        </div>
                                        <div className="right_site">
                                            <p style={{fontSize : 14 , fontWeight : "bold" , letterSpacing : 1}} className="my-0 bg-gray">Phone</p>
                                            <span><small style={{ fontSize: 12, letterSpacing: 1 }}>
                                                +8801768078195
                                            </small></span>
                                        </div>
                                       </div>
                                    </div>

                                    <div className="col ">
                                        <div className="d-flex justify-content-justify-content-around align-items-center  p-3  shadow rounded-3">
                                        <div className="left-site">
                                        <i class="me-3 lead text-primary zmdi zmdi-email"></i>
                                        </div>
                                        <div className="right_site">
                                            <p style={{fontSize : 14 , fontWeight : "bold" , letterSpacing : 1}} className="my-0 bg-gray">Email</p>
                                            <span><small style={{ fontSize: 12, letterSpacing: 1 }}>
                                                morsalinkausar043@gmail.com
                                            </small></span>
                                        </div>
                                       </div>
                                    </div>

                                    <div className="col ">
                                        <div className="d-flex justify-content-justify-content-around align-items-center p-3  shadow rounded-3">
                                        <div className="left-site">
                                        <i class="me-3 lead text-primary zmdi zmdi-pin"></i>
                                        </div>
                                        <div className="right_site">
                                            <p style={{fontSize : 14 , fontWeight : "bold" , letterSpacing : 1}} className="my-0 bg-gray">Address</p>
                                            <span><small style={{ fontSize: 12, letterSpacing: 1 }}>
                                                Jamalpur,Dhaka,Bangladesh
                                            </small></span>
                                        </div>
                                       </div>
                                    </div>
                                </div>
                            </div>

                            {/* contact form setup */}

                            <div className="col-12 col-md-8 mx-auto">
                                <form action="" method="POST" className="row shadow rounded p-3 p-md-5">
                                    <div className="col-12">
                                        <div className="row">
                                            <h4 className="fw-bold">Get In Touch</h4>
                                            <div className="col-12 mt-4">
                                                <div className="row row-cols-1 g-3 row-cols-md-3">
                                                    <div className="col">
                                                        <input className="form-control" type="text" placeholder="Your Name" name="name" autoComplete="off" required="true"/>
                                                    </div>
                                                    <div className="col">
                                                        <input className="form-control" type="text" placeholder="Your Email" name="email" autoComplete="off" required="true"/>
                                                    </div>
                                                    <div className="col">
                                                        <input className="form-control" type="text" placeholder="Your Phone Number" name="number" autoComplete="off" required="true"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <textarea style={{resize:"none"}} name="massage" id="massage" cols="10" rows="5"
                                                    placeholder="massage" className="form-control" required="true"></textarea>
                                                <button type="submit" className="btn btn-primary mt-3">send massage</button>
                                            </div>
                                        </div>
                                   </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact;