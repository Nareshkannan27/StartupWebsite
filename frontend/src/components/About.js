import React from "react";
import "./About.css"; // Ensure the file is present in the same folder

function About() {
  return (
    <div className="about-section">
      <header className="navbar">
        <h1 className="logo">0001021</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <div className="about-content">
        <div className="text-section">
          <h2>ABOUT US</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
            alteration in some form, by injected humour, or randomised. There are many variations of passages of 
            Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
          <button className="read-more-btn">READ MORE</button>
        </div>
        <div className="image-section">
          <img src="your-image-url.jpg" alt="About Us" />
        </div>
      </div>
    </div>
  );
}

export default About;
