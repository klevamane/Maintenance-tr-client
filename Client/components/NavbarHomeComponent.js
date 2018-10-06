import React from 'react';
import { Link } from 'react-router-dom';

const NavbarHomeComponent = () => (
  <ul className="navi">
    <li className="navilist">
      <a className="active" href="#home">
        Kleva
        <span id="navfix">fix'</span>
      </a>
    </li>
    <li className="navilist"><Link to="">Contact</Link></li>
    <li className="navilist"><Link class="active" to="/signup">Signup</Link></li>
  </ul>
);

export default NavbarHomeComponent;
