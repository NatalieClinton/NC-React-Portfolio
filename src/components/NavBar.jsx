import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); 
  const currentPath = location.pathname;

  return (
<nav>
      <div className="navbar-container">
        <div className="navbar-name">: Natalie Clinton :</div> 
        <ul className="navbar-links">
        <li>
          <Link
            to="/about"
            className={currentPath === '/about' ? 'active' : ''}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={currentPath === '/portfolio' ? 'active' : ''}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={currentPath === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={currentPath === '/resume' ? 'active' : ''}
          >
            Resume
          </Link>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
