import React, { useState } from "react";
import "./Contact.css";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="page-title">Contact Us</h1>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              We'd love to hear from you! Whether you have questions, feedback,
              or just want to say hello, don't hesitate to reach out.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <h3>📧 Email</h3>
                <p>contact@company.com</p>
              </div>

              <div className="contact-item">
                <h3>📞 Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>

              <div className="contact-item">
                <h3>📍 Address</h3>
                <p>
                  123 Tech Street
                  <br />
                  Innovation City, IC 12345
                </p>
              </div>

              <div className="contact-item">
                <h3>🕒 Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <h3>✅ Message Sent!</h3>
                <p>Thank you for contacting us. We'll get back to you soon!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send us a Message</h2>

                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
