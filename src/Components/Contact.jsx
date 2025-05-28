import React, { useState, useEffect } from "react";
import "./Contact.css";

function ContactPage() {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <section id="contact">
    <div className={`contact-wrapper ${loaded ? "show" : ""}`}>
      <div className="contact-card">
        <div className="contact-icon">💫</div>
        <h1>Contact Me</h1>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            className="form-field from-left"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="form-field from-right"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="form-field from-bottom"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button className="submit-btn pulse-glow" type="submit">
            🚀 Submit
          </button>
        </form>
      </div>
    </div>
    </section>
  );
}

export default ContactPage;
