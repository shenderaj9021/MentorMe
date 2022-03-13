import React from 'react'
import './Login.css';
import fb from '../Login/fb.png'
import github from '../Login/github.png';
import goo from '../Login/goo.png'
export default function Login() {
  return (
    <div className="login">
        <div className="complete">
        <h1>LOG IN</h1>
        <br />
        <form action="">
            <input type="text" name="username" id="username" placeholder="Email ID" title="enter username" required />
            <br /><br />
            <input type="password" name="password" id="password" placeholder="Password" title="enter password" required />
            <br /><br />
            <a className="forgotpass" title="forgot password" href="https://www.google.com">Forgot password?</a>
            <br /><br /><br />
            <input className="submit" type="submit" title="login" value="LOGIN" />
        </form>
        <br />
        <span className="donthaveacc">Don't have an account?
        <a className="signup" title="sign up" href="https://www.google.com"> <b> Sign up.</b></a></span> 
        <br /><br /><br /><br />
        <span className="orsignup">or Sign up using</span> <br /><br />
        <a href="https://www.facebook.com">
        <img className="fb" width="40px" title="sign up using facebook" src={fb} alt="facebook" /></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <a href="https://www.google.com">
        <img className="goo" width="40px" title="sign up using facebook" src={goo} alt="google" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.github.com">
        <img className="github" width="40px" title="sign up using facebook" src={github} alt="github" /></a>
        </div> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </div>
  )
  } 