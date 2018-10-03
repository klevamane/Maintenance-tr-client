import React from 'react'

const LoginForm = () => {
  return (
    <div>
          <form action="./User.html" id="form-in">
              <div className="form-header">
                  <div><span id="logo1">Kleva</span><span id="logo2">fix'</span></div>
              </div>
              <span>
                  <hr /></span>
              <div className="form-group marg10">
                  <label for="name">Email address</label>
                  <input type="email" name="email" id="email" required />
                      <small className="form-small-text">Secured Login</small>
                </div>
                  <div className="form-group marg10">
                      <label for="company">Password</label>
                      <input type="password" name="password" id="password" required />
                    </div>
                      <p className="marg10"><button type="submit" id="submit">Log In</button></p>
                      <p><small><a href="./recover.html">Forgot password? click here</a><span><a href="./Signup.html"
                          className="text-right-side">Signup</a></span></small></p>
                </form>
    </div>
  )
}

export default LoginForm;
