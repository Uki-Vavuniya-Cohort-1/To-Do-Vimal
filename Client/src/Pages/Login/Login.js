import React from "react";
import Navbar from '../../Components/Navbar/Navbar'
import Loginpicture from './login.jpg'

import './Login.css'

export default function Login() {


  return (

    <>
      <Navbar />
      <div className="jathu">

      <div className="container">
        <div className="container__left">
          <img src={Loginpicture} alt="lovebirds" />
          <h2>Maecenas mattis egestas</h2>
          <p>
            erdum et malesuada fames ac ante ipsum primis in faucibus uspendisse
            porta.
          </p>
        </div>
        <div className="container__right">
          <div className="content">
            <img className="logo" src="assets/logo.png" alt="logo" />
            <p className="header">Welcome </p>
            <form>
              <div className="input__group">
                <input type="text" />
                <label for="username">Username or Email</label>
              </div>
              <div className="input__group">
                <input type="password" />
                <label for="password">Password</label>
              </div>
              <p><a href="#">Forgot password?</a></p>
              <button>Login</button>
            </form>
            <div className="divider">
              <span>or</span>
            </div>
            <div className="google__login">
              <img src="assets/search.png" alt="google" />
              <span>Sign in with Google</span>
            </div>
            <p className="create__account">
              <a href="/Signup">Create Account</a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}