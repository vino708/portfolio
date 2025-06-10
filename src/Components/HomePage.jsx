import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { ReactTyped as Typed } from "react-typed";


import "./Homepage.css";
import profileImage from "../assets/Vino PNG.png";



const backgrounds = ["bg1", "bg2", "bg3"];

export default function Homepage() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={`homepage ${backgrounds[bgIndex]}`}>
      <div className="container">
        <div className="left-content">
          <h1 className="animated-text">
            <Typed
              strings={["Hello, I am Vino\nJava FullStack Developer"]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1500}
              showCursor={false}
            />
          </h1>

          <br />
          <br />
          <Link to="contact" smooth={true} duration={500} className="hire-me-btn">
            Hire Me
          </Link>

          <div className="social-icons">
            {/* Your social icons here */}
          </div>
        </div>

        <div className="right-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
}
