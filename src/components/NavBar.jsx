import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<nav>
      <div className="navbar-container">
        <div className="navbar-name">Natalie Clinton</div> 
        <ul className="navbar-links">
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
