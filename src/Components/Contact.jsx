import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";

function ContactPage() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // success or error message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
        } else {
          setLoaded(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowStatus(false);
    setStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "ddca545a-b355-4489-864f-9eec1d38281f",
          subject: "✅ New form submitted on the portfolio website",
          from_name: "Vino Portfolio Website",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: "success", message: "✅ New form submitted successfully on the portfolio website." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "❌ Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "❌ Network error. Please check your connection." });
    }

    setIsSubmitting(false);
    setShowStatus(true);

    // Auto-hide success/error message after 5 seconds
    setTimeout(() => setShowStatus(false), 5000);
  };

  return (
    <section id="contact" ref={sectionRef}>
      <div className={`contact-wrapper ${loaded ? "show" : ""}`}>
        <div className="contact-card">
          <div className="contact-icon">💫</div>
          <h1 className="contact">Contact Me</h1>

          {/* Status Message Banner */}
          {showStatus && status && (
            <div
              className={`form-status-banner ${status.type}`}
              onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
              onMouseLeave={(e) => e.currentTarget.classList.remove("hovered")}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              className="form-field from-left"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              className="form-field from-right"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <textarea
              className="form-field from-bottom"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              disabled={isSubmitting}
            ></textarea>
            <button
              className="submit-btn pulse-glow"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "🚀 Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
