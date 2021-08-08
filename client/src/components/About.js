import React from 'react';
import profileimg from "./images/kausar.jpg";

const About = () => {
    return (
        <>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-10 col-md-8 shadow rounded mx-auto p-5">
                            <form className="row">
                                <div className="col-12">
                                    <div className="row">
                                        
                                        <div className="col-md-4">
                                            <figure>
                                                <img className="img-fluid rounded" src={profileimg} alt="profileimg" />
                                            </figure>
                                        </div>

                                        <div className="col-md-6">
                                           <div className="row">
                                                <div className="co-12">
                                                     <h6 className="my-0 fw-bold">Morsalin Kausar</h6>
                                                     <span>
                                                     <small className="text-primary fw-bold d-block">Web   Devoloper</small>
                                                     </span>
                                                     <span style={{fontSize:12,color : "gray"}} className="d-inline-block mt-2">
                                                     Ranking : <strong className="text-dark">7/10</strong>
                                                     </span>
                                                </div>

                                                <div className="col-12 mt-5">
                                                     <ul class="nav nav-tabs mt-md-5" role="tablist">
                                                    <li class="nav-item">
                                                        <a class="nav-link active fw-bold" data-toggle="tab" aria-current="page" href="#home" id="hometab" role="tab">About</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link text-dark fw-bold" data-toggle="tab" id="profiletab" href="#profile" role="tab">Timeline</a>
                                                    </li>
                                                    </ul>
                                                </div>
                                           </div>
                                        </div>

                                        <div className="col-md-2 my-3 my-md-0">
                                            <input type="submit" className="btn btn-secondary" value="Edit Profile"/>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p style={{fontSize:14,fontWeight:"bold",color:"gray"}}><small>WORK LINK</small></p>
                                            <div className="d-flex flex-column social_link">
                                                <a style={{fontSize:14,marginTop:3,color:"gray",textDecoration:"none"}} href="https://www.facebook.com/morsalinkausar/" target="_blank">Facebook</a>
                                                <a style={{fontSize:14,marginTop:3,color:"gray",textDecoration:"none"}} href="https://www.instagram.com/ahmed_kawsar2002/" target="_blank">Instragram</a>
                                                <a style={{fontSize:14,marginTop:3,color:"gray",textDecoration:"none"}} href="https://www.linkedin.com/in/morsalin-kausar-2aa235215/" target="_blank">Linkdin</a>
                                                <a style={{fontSize:14,marginTop:3,color:"gray",textDecoration:"none"}} href="https://twitter.com/MorsalinKausar" target="_blank">Twitter</a>
                                                <a style={{fontSize:14,marginTop:3,color:"gray",textDecoration:"none"}} href="https://www.youtube.com/channel/UCcH_4DbnqiJ8jfjf6B9JsNQ" target="_blank">Youtube</a>
                                                <a style={{fontSize:14,marginTop:3,color:"gray",textDecoration:"none"}} href="https://morsalinkausar043.github.io/myportfolio/src/index.html?fbclid=IwAR2nid-ilY1HEWN-mQA8X9D9xd9HUjE9mDzcKnGO2hlIPKMVGOzioDYPAFo" target="_blank">Website</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <ul class="list-group list-group-flush mt-3">
                                            <li style={{fontSize:12,fontWeight:"bold",borderBottom:0}} class="list-group-item px-0">User Id</li>
                                            <li style={{fontSize:12,fontWeight:"bold",borderBottom:0}} class="list-group-item px-0">Name</li>
                                            <li style={{fontSize:12,fontWeight:"bold",borderBottom:0}} class="list-group-item px-0">Email</li>
                                            <li style={{fontSize:12,fontWeight:"bold",borderBottom:0}} class="list-group-item px-0">Phone</li>
                                            <li style={{fontSize:12,fontWeight:"bold",borderBottom:0}} class="list-group-item px-0">Profession</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul class="list-group list-group-flush mt-3">
                                            <li style={{fontSize:12,fontWeight:"bold",borderBottom:0}} class="list-group-item px-0">1234567890654892</li>
                                            <li style={{fontSize:12,fontWeight:"bold",borderBottom:0}} class="list-group-item px-0">Morsalin Kausar</li>
                                            <li style={{fontSize:12,fontWeight:"bold",borderBottom:0}} class="list-group-item px-0">morsalinkausar043@gmail.com</li>
                                            <li style={{fontSize:12,fontWeight:"bold",borderBottom:0}} class="list-group-item px-0">
                                                +88016****45**
                                            </li>
                                            <li style={{fontSize:12,fontWeight:"bold",borderBottom:0}} class="list-group-item px-0">Mearn Devoloper</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default About;