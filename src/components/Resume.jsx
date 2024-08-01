import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        You can download my resume using the link below:
      </p>
      <a href="/path/to/your/resume.pdf" download>
        Download Resume
      </a>
      <h3>Skills and Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>HTML & CSS</li>
        <li>SQL & NoSQL Databases</li>
        <li>Git & GitHub</li>
        <li>Responsive Design</li>
      </ul>
    </section>
  );
}

export default Resume;
