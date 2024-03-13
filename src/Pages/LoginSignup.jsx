import React from 'react';
import './CSS/LoginSignup.css';

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

        <div className='loginsignup-fields'>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
        </div>
        
        <button>Continue</button>
        <p className='loginsignup-login'>
          ALready have an account? <span>Login here</span>
          <div className='loginsignup-agree'>
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </p>

      </div>
      
    </div>
  )
}

export default Loginsignup;
