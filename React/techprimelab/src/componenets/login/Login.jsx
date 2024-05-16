import React from 'react';
import './login.css'

function Login() {
  return (
   <>
   <div className="rectangle">
    <div className="circle">

    </div>
   </div>
   <div className="login_container">
    <h1>Login </h1>
    <div>
      <form className='form_container' action="">
      <div class="col">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col mb-3">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
    
  </div>
  <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
 </div>
      </form>
    </div>
   </div>
   </>
  )
}

export default Login
