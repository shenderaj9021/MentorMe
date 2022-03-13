import React from 'react'
import "../Signup/Signup.css"

export default function Signup() {
  return (
    <div className="Home">
        
        <div class="complete">
        <h1>SIGN UP</h1>
        <br />
        <form action="">
            <input type="text" name="fullname" id="fullname" placeholder="Full Name"  required />
            <br /><br />
            <input type="text" name="username" id="username" placeholder="Email ID"  required />
            <br /><br />
            <input type="setpassword" name="setpassword" id="setpassword" placeholder="Set password" title="enter password" required />
            <br /><br />
            <input type="confirmpassword" name="confirmpassword" id="confirmpassword" placeholder="Confirm password" title="enter password" required />
            
            <br /><br /><br />
            <input class="submit" type="submit" title="signup" value="SIGN UP" />
        </form>
         
        <br /><br />
        <span class="orsignup">or Sign up using</span> <br /><br />
        <a href="https://www.facebook.com">
        <img class="fb" width="40px" title="sign up using facebook" src="fb.png" alt="facebook" /></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <a href="https://www.google.com">
        <img class="goo" width="40px" title="sign up using facebook" src="goo.png" alt="google" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.github.com">
        <img class="github" width="40px" title="sign up using facebook" src="github.png" alt="github" /></a>
        </div> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>   
    </div>
  )
}