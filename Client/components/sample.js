import React from 'react';
import NavbarHomeComponent from './NavbarHomeComponent';

const broadway = () => {
  return (
    <div>
    {/* <nav>
        <div class="nav-toggle">
            <i class="fa fa-bars handlebar"></i>
        </div>
        <div class="container">
            <span class="brand" id="brand"><span id="logo1">Kleva</span><span id="logo2">fix'</span></span>
            <ul id="navul" class="navul">

                <li><a href="./Signup.html">Sign up</a></li>

            </ul>
        </div>
    </nav> */}


    {/* <ul class="navi">
            <li class="navilist"><a class="active" href="#home">Kleva<span id="navfix">fix'</span></a></li>
            <li class="navilist"><a class="active" href="#home">Home</a></li>
            <li class="navilist"><a href="#contact">Contact</a></li>
            <li class="navilist" id="logoutlink"><a href="#about">Logout</a></li>
        </ul> */}
       
<NavbarHomeComponent />
    
    <div class="container">
        <div class="seperator2">
            <div class="caption">
                <h1>Longevity</h1>
                <hr />
                <h2> Mentality</h2>
                <small>Small equipments big care</small>
                <p class="caption-text">Nothing is condemed here, we believe that your faulty machines can be fixed
                    by the right hands. We have the best professionals here at Klevafix' to get
                    you device, gadgets etc jerk back to life at our laboratory.
                    We specialize in small equipment and gadget repairs with clock 60 maintenance and have been working
                    hard to help owners repair their equipments, machines and gadgets for <span>over 15 years</span>.
                    You deserve a higher level of care and reliability that we guarantee will go beyond your
                    expectations... We will be able to restore your items back to their rookie days

                </p>
            </div>
            <div class="card-fluid marg-top40y">
                <form action="./User.html" id="form-in">
                    <div class="form-header">
                        <div><span id="logo1">Kleva</span><span id="logo2">fix'</span></div>

                    </div>

                    <span>
                        <hr /></span>
                    <div class="form-group marg10">
                        <label for="name">Email address</label>
                        <input type="email" name="email" id="email" required />
                        <small class="form-small-text">Secured Login</small>
                    </div>
                    <div class="form-group marg10">
                        <label for="company">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <p class="marg10"><button type="submit" id="submit">Log In</button></p>
                    <p><small><a href="./recover.html">Forgot password? click here</a><span><a href="./Signup.html"
                                    class="text-right-side">Signup</a></span></small></p>

                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
export default broadway;
