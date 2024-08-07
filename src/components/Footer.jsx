import React from 'react';

function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Natalie Clinton. All rights reserved.
      </p>
      <ul>
        <li><a href="https://github.com/NatalieClinton">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/natalie-clinton/">LinkedIn</a></li>
        <li><a href="https://stackoverflow.com/users/23465888/natalie-clinton?tab=profile">Stack Overflow</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
