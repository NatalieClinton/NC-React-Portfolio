import React from 'react';
import hungryExplorerImage from '../assets/images/Hungry Explorer Slide.png';
import high5Image from '../assets/images/High5 Slide.png';
import teamTrackerImage from '../assets/images/team-tracker.png';
import quantumCommerceImage from '../assets/images/quantum-commerce.png';
import checkpointImage from '../assets/images/checkpoint.png';
import logoMojoImage from '../assets/images/logo-mojo.png';

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
  {
    title: 'CheckPoint - Note Taker',
    image: checkpointImage,
    deployedLink: 'https://checkpoint-ca8b.onrender.com',
    githubLink: 'https://github.com/NatalieClinton/CheckPoint'
  },
  {
    title: 'Team Tracker - Employee Tracker',
    image: teamTrackerImage,
    deployedLink: 'https://natalieclinton.github.io/Team-Tracker/',
    githubLink: 'https://github.com/NatalieClinton/Team-Tracker'
  },
  {
    title: 'Quantum Commerce - ORM Ecommerce Platform',
    image: quantumCommerceImage,
    deployedLink: 'https://natalieclinton.github.io/Quantum-Commerce/',
    githubLink: 'https://github.com/NatalieClinton/Quantum-Commerce'
  },
  {
    title: 'Logo Mojo - SVG Logo Maker',
    image: logoMojoImage,
    deployedLink: 'https://natalieclinton.github.io/Logo-Mojo/',
    githubLink: 'https://github.com/NatalieClinton/Logo-Mojo'
  },
];

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-heading">Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <h3 className="portfolio-title">{project.title}</h3>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              <img className="portfolio-image" src={project.image} alt={project.title} />
            </a>
            <p className="portfolio-links">
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
