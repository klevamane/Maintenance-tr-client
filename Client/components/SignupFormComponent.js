import React from 'react'

const SignupFormComponent = () => {
  return (
    <div className="marg-top30y">
         <form action="./Admin.html" id="form-in">
            <div className="form-header">
                <div><span id="logo1">Kleva</span><span id="logo2">fix'</span></div>
                <div className="cardlogo-icon"><span><a href="./Index.html"><i className="fa fa-arrow-circle-o-left"> Home</i></a></span></div>
            </div>
                 <span><hr/></span>
                <div className="form-group marg10">
                        <label for="name">Firstname</label>
                        <input type="text" name="fname" id="firstname" required />
                   </div>
                   <div className="form-group marg10">
                        <label for="lname">Lastname</label>
                        <input type="text" name="lname" id="lastname" required />
                   </div>
                   <div className="form-group marg10">
                        <label for="company">Email</label>
                        <input type="email" name="email" id="email" required />
                   </div>
                   <div className="form-group marg10">
                        <label for="mobile">Mobile</label>
                        <input type="text" name="mobile" id="mobile" required maxlength="11" minlength="11" />
                   </div>
                   <div className="form-group marg10">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" required />
                   </div>
                   <div className="form-group marg10">
                        <label for="cpassword">Confirm password</label>
                        <input type="password" name="cpassword" id="cpassword" required />
                   </div>
                   <p className="marg10"><button type="submit" id="signupsubmit">Register</button></p>
                   <p><a href="./Index.html">Already Registered? Login</a></p>    
        </form>
      
    </div>
  )
}

export default SignupFormComponent;
