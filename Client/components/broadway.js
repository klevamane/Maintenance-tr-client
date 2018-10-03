import React, { Component } from 'react'
import NavbarHomeComponent from './NavbarHomeComponent';
import LoginForm from './LoginFormComponent';


class broadway extends Component {

    componentDidMount() {
        document.body.classList = 'indexbg nobody-margin';
        document.body.id = 'primary-background';
        // document.body.classList.add('indexbg nobody-margin');

    }

     componentWillUnmount() {
        document.body.classList = '';
        document.body.id = '';

     }
  render() {
    return (
        
    <div>
       
<NavbarHomeComponent />
    
    <div className="container">
        <div className="seperator2">
            <div className="caption">
                <h1>Longevity</h1>
                <hr />
                <h2> Mentality</h2>
                <small>Small equipments big care</small>
                <p className="caption-text">Nothing is condemed here, we believe that your faulty machines can be fixed
                    by the right hands. We have the best professionals here at Klevafix' to get
                    you device, gadgets etc jerk back to life at our laboratory.
                    We specialize in small equipment and gadget repairs with clock 60 maintenance and have been working
                    hard to help owners repair their equipments, machines and gadgets for <span>over 15 years</span>.
                    You deserve a higher level of care and reliability that we guarantee will go beyond your
                    expectations... We will be able to restore your items back to their rookie days

                </p>
            </div>
            <div className="card-fluid marg-top40y">

                <LoginForm />
            </div>
        </div>
    </div>
    </div>
    )
  }
}

export default broadway;
