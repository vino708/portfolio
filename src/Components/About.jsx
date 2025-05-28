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

          <div className="card-container">
            <div className="info-card">
              <h4>Summary</h4>
              <p>I build responsive and engaging interfaces. Passionate about clean code and UX. Experienced in React, Tailwind, and more.</p>
            </div>

            <div className="info-card">
              <h4>Name</h4>
              <p>Vino</p>
            </div>

            <div className="info-card">
              <h4>Age</h4>
              <p>24</p>
            </div>

            <div className="info-card">
              <h4>Hobby</h4>
              <p>UI Animations</p>
            </div>
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
