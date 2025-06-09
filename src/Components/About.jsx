import React from 'react';
import './About.css';
import { FaCode, FaPaintBrush, FaMobileAlt, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <div className="about-section">
        {/* Left Side */}
        <div className="about-left">
          <div className="glass-card">
            <h2 className="section-title">👨‍💻 About Me</h2>
            <h3 className="section-subtitle">Frontend Developer</h3>

            <div className="about-info">
              <div className="block">
                <h4>🎓 Education</h4>
                <p><strong>B.E Mechanical Engineering</strong><br />St. Xavier's Catholic College (2018 - 2021)</p>
                <p><strong>High School</strong><br />Adline Matric Higher Secondary (2016 - 2018)</p>
              </div>

              <div className="block">
                <h4>💼 Experience</h4>
                <p><strong>Frontend Developer</strong> – Working (2025 – Present)</p>
                <ul>
                  <li>6 months experience with React & Tailwind</li>
                  <li>Built UI components & responsive pages</li>
                  <li>Hands-on with resume/contact/project sections</li>
                </ul>
              </div>

              <div className="block">
                <h4>📌 Personal Details</h4>
                <p><strong>Name:</strong> Vino</p>
                <p><strong>Age:</strong> 24</p>
                <p><strong>Address:</strong><br />
                  6/100C, Cherrupancodu,<br />
                  Karankadu, Kanyakumari – 629809
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <div className="floating-icons">
            <span className="icon-style icon-code"><FaCode /></span>
            <span className="icon-style icon-brush"><FaPaintBrush /></span>
            <span className="icon-style icon-mobile"><FaMobileAlt /></span>
            <span className="icon-style icon-laptop"><FaLaptopCode /></span>
          </div>

          <a
            href={`${process.env.PUBLIC_URL}/Vino_Resum.pdf`}
            download="Vino_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-download"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
