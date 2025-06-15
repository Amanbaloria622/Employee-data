import React from "react";
import "./About.css";
export const About = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="page-title">About Us</h1>
        <div className="content-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to providing excellent user experiences through
            innovative web applications. Our team focuses on creating intuitive,
            responsive, and accessible solutions that meet modern web standards.
          </p>
        </div>

        <div className="content-section">
          <h2>Our Team</h2>
          <p>
            Our diverse team of developers, designers, and product managers work
            collaboratively to deliver high-quality applications. We believe in
            continuous learning and staying up-to-date with the latest
            technologies.
          </p>
        </div>

        <div className="content-section">
          <h2>Technologies We Use</h2>
          <div className="tech-grid">
            <div className="tech-item">React</div>
            <div className="tech-item">JavaScript</div>
            <div className="tech-item">CSS3</div>
            <div className="tech-item">HTML5</div>
            <div className="tech-item">Node.js</div>
            <div className="tech-item">REST APIs</div>
          </div>
        </div>

        <div className="content-section">
          <h2>Why Choose Us?</h2>
          <ul className="feature-list">
            <li>✓ Modern, responsive design</li>
            <li>✓ Fast and reliable performance</li>
            <li>✓ User-friendly interfaces</li>
            <li>✓ Comprehensive testing</li>
            <li>✓ Ongoing support and updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
