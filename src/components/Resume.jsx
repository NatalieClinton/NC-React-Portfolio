import React from 'react';

function Resume() {
  return (
    <section className="resume-section">
      <h2 className="resume-heading">Resume</h2>
      <p className="resume-text">
        You can download my resume using the link below:
      </p>
      <a className="resume-link" href=".\src\assets\images\Natalie Clinton - Resume 2024 - V2.pdf" download>
        Download Resume
      </a>
      <h3 className="resume-subheading">Skills and Proficiencies</h3>
      <ul className="resume-list">
        <li className="resume-list-item">JavaScript</li>
        <li className="resume-list-item">React</li>
        <li className="resume-list-item">Node.js</li>
        <li className="resume-list-item">Express.js</li>
        <li className="resume-list-item">HTML & CSS</li>
        <li className="resume-list-item">SQL & NoSQL Databases</li>
        <li className="resume-list-item">Git & GitHub</li>
        <li className="resume-list-item">Responsive Design</li>
      </ul>
    </section>
  );
}


export default Resume;
