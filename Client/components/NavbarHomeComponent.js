import React from 'react'
import { Link } from 'react-router-dom';

const NavbarHomeComponent = () => {
    return (
        <ul class="navi">
            <li class="navilist"><a class="active" href="#home">Kleva<span id="navfix">fix'</span></a></li>
            <li class="navilist"><a class="active" href="#home">Home</a></li>
            <li class="navilist"><a href="#contact">Contact</a></li>
            <li class="navilist" id="logoutlink"><a href="#about">Logout</a></li>
        </ul>
    )
}

export default NavbarHomeComponent;
