import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul className="navi">
    <li className="navilist">
      <a className="active" href="#home">
        Kleva
        <span id="navfix">fix</span>
      </a>
    </li>
    <li className="navilist"><Link to="/">Logout</Link></li>
  </ul>
);

export default Navbar;
