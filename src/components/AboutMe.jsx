import React from 'react';
import myHead from '../assets/images/my head.jpg';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <div>
      <img src={myHead} alt="Natalie Clinton" width="150" style={{ borderRadius: '50%' }} />
        <p>
          Hi, I'm Natalie Clinton, a passionate web developer with experience in building modern and responsive web applications. I have a strong background in HTML, CSS, JavaScript, and various frontend and backend frameworks. I'm dedicated to creating efficient and scalable solutions that provide excellent user experiences. In my spare time, I enjoy learning new technologies and working on personal projects to enhance my skills.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
