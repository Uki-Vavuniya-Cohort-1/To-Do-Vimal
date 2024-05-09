import React from "react";
import './Signin.css'
import Navbar from '../../Components/Navbar/Navbar';
// import React, { useState, useEffect } from "react";


export default function Signin() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


  


    return (
        <>
            <Navbar />

    <div className="container">
      <div className="container__left">
        <img src="assets/bg.png" alt="lovebirds" />
        <h2>Maecenas mattis egestas</h2>
        <p>
          erdum et malesuada fames ac ante ipsum primis in faucibus uspendisse
          porta.
        </p>
      </div>
      <div className="container__right">
        <div className="content">
          <img className="logo" src="assets/logo.png" alt="logo" />
          <p className="header">Welcome to Lovebirds</p>
          <form>
            <div className="input__group">
              <input type="text" />
              <label for="firstName">First Name</label>
            </div>
            <div className="input__group">
              <input type="text" />
              <label for="lastName">Last Name</label>
            </div>
            <div className="input__group">
              <input type="email" />
              <label for="email">E-mail</label>
            </div>
            <div className="input__group">
              <input type="password" />
              <label for="password">Password</label>
            </div>
            {/* <p><a href="#">Forgot password?</a></p> */}
            <button>Sign Up</button>
          </form>
          <div className="divider">
            <span>or</span>
          </div>
          <div className="google__login">
            <img src="assets/search.png" alt="google" />
            <span>Sign Up with Google</span>
          </div>
          <p className="create__account">
             <a href="/Login">Login Account</a>
          </p>
        </div>
      </div>
    </div>
        </>
    )
}