import './Footer.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Contact Info */}
          <div className="footer-contact">
            <div>
              <a href="tel:+918940688208" className="footer-link">
                <FaPhone /> <span>+91 89406 88208</span>
              </a>
            </div>
            <div>
              <a href="mailto:vinonsm@gmail.com"className="footer-link">
                <FaEnvelope /> <span>vinonsm@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/vino/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/vino5819?igsh=MXZ2eXRrOGRjejk3MA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/19LoZALeu5/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} All rights reserved @ Vino S
        </div>
      </div>
    </footer>
  );
}
