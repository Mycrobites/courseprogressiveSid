import React, { useState, useRef } from "react";
import "./login.css";
import axios from "axios";
// import Logo from "../Pics/WHite logo.svg";
import { useHistory } from "react-router-dom";
import Country from "./countries";

const initialState = {
  username: "",
  email: "",
  country: "",
  phone_no: "",
  password1: "",
  password2: "",
};
const intialLoginState = {
  email: "",
  password: "",
};
function LoginPage() {
  const [login, setLogin] = useState(true);
  const [signUp, setsignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [loginValues, setLoginValues] = useState(intialLoginState);
  const history = useHistory();
  function handleinClick() {
    setLogin(true);
    setsignUp(false);
  }
  function handleupClick() {
    setLogin(false);
    setsignUp(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (signUp) {
      console.log(formData);
      //   signup(formData, history);
    }
    // else {
    //   login(loginValues, history);
    // }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //   const googleSuccess = async (res) => {
  //     console.log(res);
  //     const result = res?.profileObj;
  //     const token = res?.tokenId;
  //     axios({
  //       method: "POST",
  //       url: "",
  //       data: { token, result },
  //     }).then((response) => {
  //       console.log(response);
  //     });
  //     try {
  //       dispatch({ type: AUTH, data: { result, token } });
  //       history.push("/courses");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const googleError = (error) => {
  //     alert("Google login unsuccessful");
  //   };

  // Login Form Handling

  function handleLoginChange(e) {
    const { name, value } = e.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    if (login) {
      console.log(loginValues);
      //   normallogin(loginValues, history);
    }
    // console.log(loginValues);
  }

  // SignUp Form handling

  // const signUpInitialState = {
  //   user_name: "",
  //   ph_num: "",
  //   signUp_email: "",
  //   countries: "",
  //   password: "",
  //   confirm_password: "",
  // };

  // const [signupValues , setSignUpValues]=useState(signUpInitialState);
  // function handleSignUpChange(e)
  // {
  //   const { name , value } = e.target;
  //   setSignUpValues({
  //     ...signupValues ,
  //     [name]:value
  //   });
  // }
  // function handleSignUpSubmit(e)
  // {
  //   if(signupValues.password!==signupValues.confirm_password)
  //   alert("Passwords dont match");
  //   else
  //   console.log(signupValues);
  //   e.preventDefault();
  // }

  return (
    <div className="login">
      <div className="login_sidebar">
        {/* <a href="/">
          <img src={Logo} alt="img" className="login__logo" />
        </a> */}
        {signUp && (
          <div className="perks__desc">
            <h3>Upon signing up you can: </h3>
            <ul>
              <li>Access first three lessons of each course </li>
              <li>Participate in all competitions</li>
              <li>Get a newsletter every week</li>
              <li>Attend all the workshops</li>
            </ul>
          </div>
        )}
      </div>
      <div className="login__Main">
        <div className="login__container">
          <div
            onClick={handleinClick}
            className={`container__SignIn ${login && `Selected`}`}
          >
            <a href="#signin">Login</a>
          </div>
          <div
            onClick={handleupClick}
            className={`container__SignIn ${signUp && `Selected`}`}
          >
            <a href="#signup">Sign Up</a>
          </div>
        </div>
        <span style={{ fontSize: "1.5em" }}>Enter your details below</span>
        {login && (
          <div>
            <form className="loginForm" onSubmit={handleLoginSubmit}>
              <input
                className="inputMail"
                type="email"
                onChange={handleLoginChange}
                name="email"
                value={loginValues.loginMail}
                placeholder="Enter your registered mail"
              />
              <input
                className="inputPass"
                type="password"
                onChange={handleLoginChange}
                name="password"
                value={loginValues.loginPassword}
                placeholder="Password"
              />

              <button type="submit" className="login__btn">
                Login
              </button>
            </form>
            <span className="login_Span">-OR-</span>
            {/* <GoogleLogin
              // clientId="1053171825037-a7o2gs3l1hgqtm5tgtf7kcpj3poplpl1.apps.googleusercontent.com"
              onSuccess={googleSuccess}
              onFailure={googleError}
              clientId="308444623181-ic03m1jtkaqkv4vsmq8om9m0o3fjof73.apps.googleusercontent.com"
              className="btn__Google"
              buttonText="Login with Google"
              cookiePolicy={"single_host_origin"}
            /> */}

            <div className="register">
              <a href="/" style={{ marginRight: "9.7rem" }}>
                Don't have an account yet?{" "}
                <b style={{ color: "#6f389f" }}>Sign Up </b>
              </a>
              <a href="/">Forgot Password ?</a>
            </div>
          </div>
        )}
        {signUp && (
          <div>
            <form onSubmit={handleSubmit} className="signUpForm">
              <input
                onChange={handleChange}
                className="inputMail"
                name="username"
                id="name"
                type="name"
                placeholder="Enter your name"
              />
              <input
                onChange={handleChange}
                className="inputNum"
                name="phone_no"
                id="num"
                type="tel"
                placeholder="Enter Phone Number"
              />
              <input
                onChange={handleChange}
                className="inputMail"
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
              <select
                onChange={handleChange}
                id="countries"
                name="country"
                placeholder="Select your Country"
              >
                {Country.map((data, i) => (
                  <option value={data}>{data}</option>
                ))}
              </select>
              <input
                onChange={handleChange}
                className="inputPass"
                name="password1"
                id="Password"
                type="password"
                placeholder="Password"
              />
              <input
                onChange={handleChange}
                className="inputPass"
                name="password2"
                id="Password"
                type="password"
                placeholder="Confirm Password"
              />
              <div className="promotions">
                <input type="checkbox" checked />
                <label>Email me competition updates</label>
              </div>
              <button type="submit" className="login__btn">
                Sign Up
              </button>
            </form>

            <div className="register">
              <p
                style={{
                  fontSize: "11px",
                  opacity: "0.7",
                  textAlign: "center",
                  wordSpacing: "1px",
                }}
              >
                By clicking "Sign Up", you hereby agree to
                <b style={{ color: "#6f389f" }}>
                  &nbsp; Terms and Conditions and Privacy Policy.
                </b>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
