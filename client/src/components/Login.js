import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import "./mix.css"

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    email: "",
    password: "",


  });

  const history = useNavigate();

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

  const loginuser = async (e) => {
    e.preventDefault();
    const { email, password } = inpval;
    if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("enter valid email")
    } else if (password === "") {
      alert("enter your password")
    } else if (password.length < 6) {
      alert("password must be 6 char")
    } else {
      try {
        // const response = await fetch("/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     username: email,
        //     password: password,
        //   }),
        // });
        const response = await fetch("/login", { // Updated URL
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        });
        
  
        const data = await response.json();
        console.log(data);
        // Handle the response as needed
        if (response.ok) {
          // Login successful
          history("/dash");
        } else {
          // Login failed
          alert("Invalid username or password");
        }
      } catch (error) {
        console.error(error);
        // Handle errors
      }



      // const data = await fetch("/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     email, password
      //   })
      // });
      // //console.log("user login succesfully done");
      // const res = await data.json();
      // console.log(res);
      // if (res.status === 201) {
      //   localStorage.setItem("usersdatatoken", res.result.token)
      //   history("/dash")

        //alert("user registration done");
        setInpval({ ...inpval, email: "", password: "" });
      }
    

  }
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>WelcomeBack,Log In</h1>
            <p>Hi,we are glad you are back,Please login.</p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address'></input>
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your Password'></input>
                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className='btn' onClick={loginuser}>Login</button>
            <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink> </p>


          </form>


        </div>

      </section>
    </>

  )
}

export default Login
