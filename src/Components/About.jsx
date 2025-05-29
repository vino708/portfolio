import React from 'react';
import './About.css';
import { FaCode, FaPaintBrush, FaMobileAlt, FaLaptopCode } from 'react-icons/fa';


const About = () => {
  return (
    <section id='about'>
      <div className="about-section">
        {/* Left Side - Stylish Info Cards */}
        <div className="about-left w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-2 text-orange-500">About Me</h2>
          <h3 className="text-lg text-gray-700 mb-4">Frontend Developer</h3>

          <div className="info-card custom-card bg-white p-4 md:p-6 rounded-xl shadow-lg space-y-6">

            {/* Education */}
            <div>
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Education</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>
                  <strong>B.E Mechanical Engineering</strong> – St. Xavier's Catholic College of Engineering (2018 - 2021)
                </li>
                <li>
                  <strong>High School</strong> – Adline Matric Higher Secondary School (2016 - 2018)
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div>
              <br />
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Experience</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li><strong>Frontend Developer</strong> – Working (2025 – Present)</li>
                <li>Gained 6 months of hands-on experience building responsive and interactive user interfaces using React.js and Tailwind CSS.</li>
                <li>Created landing pages, UI components, and interactive sections like resume, contact forms, and project galleries.</li>
              </ul>
            </div>

            {/* Personal Details */}
            <div>
              <br />
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Personal Details</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li><strong>Name:</strong> Vino</li>
                <li><strong>Age:</strong> 24</li>
                <li>
                  <strong>Address:</strong><br />
                  6/100C, Cherrupancodu,<br />
                  Karankadu (Post),<br />
                  Kanyakumari District – 629809
                </li>
              </ul>
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
