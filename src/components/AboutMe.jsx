import React from 'react';
import { Link } from 'react-router-dom';
import wave from '../assets/images/laptop wave.png';

function AboutMe() {
  return (
    <section className="about-me-section">
      <h2 className="section-heading">About Me</h2>
      <div className="about-me-container">
        <img src={wave} alt="Natalie Clinton" className="profile-image" />
        <div className="about-me-details">
          <h4>Hi, I'm Natalie👋</h4>
          <h6>I'm a Full Stack Developer.</h6>
          <p>⚡Fueled by Coffee</p>
          <p>🌎Based in Toronto</p>
          <p>💼Project Coordinator at Gray's</p>
        </div>
      </div>
      <p className="about-me-description">
        Hi, I'm Natalie Clinton, a passionate web developer with experience in building modern and responsive web applications. I have a strong background in HTML, CSS, JavaScript, and various frontend and backend frameworks. I'm dedicated to creating efficient and scalable solutions that provide excellent user experiences. In my spare time, I enjoy learning new technologies and working on personal projects to enhance my skills.
      </p>
      <p className="about-me-contact">
        Click <Link to="/contact">here</Link> to reach out regarding any inquiries!
      </p>
    </section>
  );
}

export default AboutMe;
