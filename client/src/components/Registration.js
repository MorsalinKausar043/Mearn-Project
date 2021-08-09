import React , {useState} from 'react';
import signlogo from "./images/pic1.jpg";
import { NavLink , useHistory } from "react-router-dom";

const Registration = () => {

    const history = useHistory();
    const [user, setuser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password : "",
        cpassword : ""
    });

    // let name, value;
    const dataInput = (e) => {

        // name = e.target.name;
        // value = e.target.value;
        let { name, value } = e.target;

        setuser({...user , [name] : value})
    }

    const postData = async (e) => {
        try
        {
            e.preventDefault();

            const { name, email, phone, work, password, cpassword } = user;

            const res = await fetch("/registration", {
                method: "POST",
                headers: {
                    "ContentType": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, work, password, cpassword
                })
            });

            let data = await res.json();

            if (data.status == 422 || !data)
            {
                window.alert("submited not Successfull!");
                console.log("submited not Successfull!");
            }
            else
            {
                window.alert("submited Successfull!");
                console.log("submited Successfull!");

                history.push("/login");
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section>
                <div className="contaienr my-5">
                    <div className="row mx-0">
                        <div className="col-10 col-md-6  mx-auto shadow-lg rounded-3 py-3 px-2">
                            <div className="row">
                                <div className="col-12 col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center flex-column">
                                    <h3 className="fw-bold mb-3">Sign Up</h3>
                                    <form method="POST">
                                            <div className="form-group d-flex justify-content-center align-items-center my-2">
                                                <label for="name"><i className="me-1 zmdi zmdi-account"></i></label>
                                                <input type="text" className="form_inputs" id="name" name="name" autoComplete="off" aria-describedby="emailHelp" onChange={dataInput} value={user.name} placeholder="Enter Name"/>
                                            </div>
                                        
                                            <div className="form-group d-flex justify-content-center align-items-center my-2">
                                                <label for="email"><i className="me-1 zmdi zmdi-email"></i></label>
                                                <input type="email" className="form_inputs" id="email" name="email" autoComplete="off" aria-describedby="emailHelp" onChange={dataInput} value={user.email} placeholder="Enter Email"/>
                                            </div>
                                        
                                            <div className="form-group d-flex justify-content-center align-items-center my-2">
                                                <label for="phone"><i className="me-1 zmdi zmdi-phone"></i></label>
                                                <input type="Number" className="form_inputs" id="phone" name="phone" autoComplete="off" aria-describedby="emailHelp" onChange={dataInput} value={user.phone} placeholder="Enter Number"/>
                                            </div>
                                        
                                            <div className="form-group d-flex justify-content-center align-items-center my-2">
                                                <label for="work"><i class="me-1 zmdi zmdi-card-giftcard"></i></label>
                                                <input type="text" className="form_inputs" id="work" name="work" autoComplete="off" aria-describedby="emailHelp" onChange={dataInput} value={user.work} placeholder="Your Proffesion"/>
                                            </div>
                                        
                                            <div className="form-group d-flex justify-content-center align-items-center my-2">
                                                <label for="password"><i className="me-1 zmdi zmdi-key"></i></label>
                                                <input type="password" className="form_inputs" id="password" name="password" autoComplete="off" aria-describedby="emailHelp" onChange={dataInput} value={user.password} placeholder="Enter Password"/>
                                            </div>
                                        
                                            <div className="form-group d-flex justify-content-center align-items-center my-2">
                                                <label for="confirmpassword"><i className="me-1 zmdi zmdi-key"></i></label>
                                                <input type="password" className="form_inputs" id="confirmpassword" name="cpassword" autoComplete="off" aria-describedby="emailHelp" onChange={dataInput} value={user.cpassword} placeholder="Enter Confirm Password"/>
                                            </div>
                                        
                                           <div className="form-btn mt-4">
                                            <input type="submit" className="btn btn-primary" name="signup" id="signup" value="Submit" onClick={postData}/>
                                            </div>
                                     </form>
                                </div>
                                <div className="img-div col-12 order-1 order-md-2 col-md-6 d-flex justify-content-center align-items-center flex-column">
                                    <figure>
                                        <img className="img-fluid" src={signlogo} alt="singuplogo" />
                                    </figure>
                                    <p><NavLink style={{fontSize : 12 , textDecoration : "none" ,color : "gray" }} to="/login">I Am Aleady Register!</NavLink></p>
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