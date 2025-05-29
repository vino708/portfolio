import React from 'react';
import './About.css';
import { FaCode, FaPaintBrush, FaMobileAlt, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <div className="about-section">
        {/* Left Side - Stylish Info Cards */}
        <div className="about-left">
          <h2>About Me</h2>
          <h3>Frontend Developer</h3>

          <div className="info-card">
            <h4>Education</h4>
            <ul>
              <li><strong>B.E Mechanical Engineering</strong> – st xavier's catholic college of engineering (2018 - 2021)</li>
              <li><strong>High School</strong> – Adline matric higher secondary school (2016 - 2018)</li>
            </ul>
            <br />
            <h4>Experience</h4>
            <ul>
              <li><strong>Frontend Developer</strong> – Working (2025 - Present)</li>
              <li>Gained 6 months of hands-on experience building responsive and interactive user interfaces using React.js and Tailwind CSS.</li>
              <li>Created landing pages, UI components, and interactive sections like resume, contact forms, and project galleries.</li>
            </ul>
            <br />
            <h4>Personal Details</h4>
            <ul>
              <li><strong>Name:</strong> Vino</li>
              <li><strong>Age:</strong> 24</li>
              <li><strong>Address:</strong>6/100c,cherrupancodu,karankadu(post),kaniya kumari distric - 629809</li>
            </ul>

          </div>
        </div>


        {/* Right Side - Rotating Circles with Resume Button Below */}
        <div className="about-right">
          <div className="right-inner">
            <div className="circle-container">
              <div className="outer-circle">
                <div className="inner-circle"></div>
                <div className="icon icon1"><FaCode /></div>
                <div className="icon icon2"><FaPaintBrush /></div>
                <div className="icon icon3"><FaMobileAlt /></div>
                <div className="icon icon4"><FaLaptopCode /></div>
              </div>
            </div>

            {/* Resume Download Button Below Circle */}
            <a href="/Vino_Resume.pdf" download className="resume-btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
