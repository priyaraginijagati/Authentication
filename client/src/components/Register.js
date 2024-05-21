import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import "./mix.css"

const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setcPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""


    });

    //console.log(inpval);

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };
    const addUserdata = async (e) => {
        e.preventDefault()

        const { fname, email, password, cpassword } = inpval;
        if (fname === "") {
            alert("please enter your name");

        } else if (email === "") {
            alert("please enter your email");
        } else if (!email.includes("@")) {
            alert("enter valid email")
        } else if (password === "") {
            alert("enter your password")
        } else if (password.length < 6) {
            alert("password must be 6 char")
        } else if (cpassword === "") {
            alert("enter your confirm password")
        }
        else if (cpassword.length < 6) {
            alert("confirm password must be 6 char")
        } else if (password !== cpassword) {
            alert("password and confirm password not match")
        } else {
            //console.log("user registration succesfully done");

            const data = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, password, cpassword
                })
            });
            const res = await data.json();
            console.log(res.status);
            if (res.status === 201) {
                alert("user registration done");
                setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" });
            }
        }

    }
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Sign Up</h1>
                        <p style={{ textAlign: "center" }}>We are glad that you will be using Project Cloud to manage <br />
                            your tasks! We hope that you will get like it.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="fname">Name</label>
                            <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder='Enter Your Name'></input>
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter Your Email Address'></input>
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Enter Your Password'></input>
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Confirm Password</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} value={inpval.cpassword} onChange={setVal} name="cpassword" id="cpassword" placeholder='Confirm Password'></input>
                                <div className="showpass" onClick={() => setcPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={addUserdata}>Sign Up</button>
                        <p>Already have an account? <NavLink to="/">Log In</NavLink></p>


                    </form>


                </div>

            </section>
        </>


    )
}

export default Register
