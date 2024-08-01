import React from 'react';

function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Natalie Clinton. All rights reserved.
      </p>
      <ul>
        <li><a href="https://github.com/NatalieClinton">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/natalie-clinton-892b42152/">LinkedIn</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
