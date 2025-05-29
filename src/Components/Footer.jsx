import './Footer.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-contact">
            <div><FaPhone /> <span>+918940688208</span></div>
            <div><FaEnvelope /> <span>vinonsm@gmail.com</span></div>
          </div>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} All rights reserved @ Vino S
        </div>
      </div>
    </footer>
  );
}
