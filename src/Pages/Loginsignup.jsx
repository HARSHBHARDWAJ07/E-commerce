import React from 'react'
import "./CSS/LoginSignup.css"

 const Loginsignup = () => {
  return (
    <div className='Loginsignup'>
     <h1>Sign Up</h1>
     <div className="loginsignup-container">
      <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='Password' />
      </div>
      <button>continue</button>
      <p className="loginsignup_login">Already have an account?
        <span>Login here</span>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing i agree to the terms of use & privacy policy. </p>
        </div>
      </p>
     </div>
    </div>
  )
}

export default Loginsignup