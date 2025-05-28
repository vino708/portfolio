import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava } from 'react-icons/fa';
import { SiMysql, SiSpringboot } from 'react-icons/si';

const Skills = () => {
  const cardRefs = useRef([]);

  const icons = [
    { icon: <FaHtml5 />, name: 'HTML', class: 'html' },
    { icon: <FaCss3Alt />, name: 'CSS', class: 'css' },
    { icon: <FaJs />, name: 'JavaScript', class: 'js' },
    { icon: <FaReact />, name: 'React', class: 'react' },
    { icon: <FaBootstrap />, name: 'Bootstrap', class: 'bootstrap' },
    { icon: <SiMysql />, name: 'MySQL', class: 'mysql' },
    { icon: <FaJava />, name: 'Java', class: 'java' },
    { icon: <SiSpringboot />, name: 'Spring Boot', class: 'springboot' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate'); // to allow re-animation
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Tech Stack</h2>
      <div className="skills-grid">
        {icons.map((item, index) => (
          <div
            key={item.name}
            ref={el => (cardRefs.current[index] = el)}
            className={`skill-card ${item.class}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
