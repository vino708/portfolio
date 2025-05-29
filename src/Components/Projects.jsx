import React, { useState, useEffect, useRef } from 'react';
import './Project.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  const projects = [
    {
      title: 'Homiefix Web App',
      description: 'A full-stack service platform for home maintenance, featuring live booking, real-time tracking, and admin dashboard.',
      tech:  ['HTML', 'CSS', 'JavaScript', 'React JS'],
      details: 'This web app includes real-time booking, provider tracking, and an admin dashboard with analytics. Designed with MERN stack for high performance and scalability. It provides role-based dashboards for users, service providers, and administrators, ensuring a seamless maintenance service experience.',
    },
    {
      title: 'Homiefix Static Website',
      description: 'A fast, SEO-optimized static landing page for Homiefix. Features modern design, contact form, and animations.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React JS'],
      details: 'This static website serves as a visually appealing landing page for Homiefix. It uses GSAP for scroll-triggered animations and smooth interactions. Designed with SEO best practices, it includes a fully responsive layout, animated hero section, and a functional contact form to generate leads effectively.',
    },
    {
      title: 'Solar Static Website',
      description: 'Promotes solar energy solutions with animated visuals and smooth parallax scrolling for better engagement.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React JS'],
      details: 'A story-driven layout that uses AOS and parallax effects to highlight the benefits of solar energy. With a focus on storytelling, the design uses layered visuals, animations, and smooth transitions to capture user attention and promote sustainable energy initiatives.',
    },
    {
      title: 'CyberArcadia Static Website',
      description: 'Futuristic cyber-themed site with glitch animations, custom SVGs, and pixel fonts for a retro feel.',
      tech:  ['HTML', 'CSS', 'JavaScript', 'React JS'],
      details: 'CyberArcadia is a visually bold, cyberpunk-style website that blends retro design with modern web techniques. Features glitch animations, animated SVG elements, pixelated fonts, and dynamic hover effects. Perfect for gaming or digital art portfolios seeking a unique, immersive aesthetic.',
    },
  ];

  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        cardsRef.current.forEach((el, index) => {
          setTimeout(() => {
            el?.classList.add('fade-up');
          }, index * 150); // stagger animation
        });
      } else {
        cardsRef.current.forEach(el => {
          el?.classList.remove('fade-up');
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='projects' className="projects-section" ref={sectionRef}>
      <h2 className="projects-title">🚀 Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <button className="view-link" onClick={() => setSelectedProject(project)}>
              View More →
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
            <button className="close-button" onClick={handleCloseModal}>✖ Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
