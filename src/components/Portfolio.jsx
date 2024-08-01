import React from 'react';
import hungryExplorerImage from '../assets/images/Hungry Explorer Slide.png';
import high5Image from '../assets/images/High5 Slide.png';

const projects = [
  {
    title: 'Hungry Explorer - Find Nearby Restaurants',
    image: hungryExplorerImage,
    deployedLink: 'https://natalieclinton.github.io/Project1-Group3/',
    githubLink: 'https://github.com/NatalieClinton/Project1-Group3'
  },
  {
    title: 'High 5 - Employee Feedback and Recognition Platform',
    image: high5Image,
    deployedLink: 'https://high5-bd4r.onrender.com',
    githubLink: 'https://github.com/catdelaney/High5'
  },
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} style={{ width: '50vh' }} />
            </a>
            <p>
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a> | 
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
