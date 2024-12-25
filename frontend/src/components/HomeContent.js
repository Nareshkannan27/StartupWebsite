import React from 'react';
// Correct path to the image
import logo from '../assests/one.png';
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div className="home-section">
      {/* Navbar Section */}
      <header className="navbar">
        <h1 className="logo">0001021</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/admin">Admin</a></li>
            <li><a href="/form">Form</a></li>
            <li><a href="/contact">Carrers</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <div className="home-content">
        {/* Text Section */}
        <div className="text-section">
          <h1>Welcome to Our Project Assistance Service!</h1>
          <p>
            Discover a platform where innovation meets reliability. We specialize in creating projects for college students, including:
          </p>
          <ul>
            <li>Final Year Projects</li>
            <li>Pre-Final Year Projects</li>
          </ul>
          <p>We currently support the following departments:</p>
          <ul>
            <li>Computer Science and Engineering (CSE)</li>
            <li>Electronics and Communication Engineering (ECE)</li>
          </ul>
          <p>
            Based on your suggestions and ideas, we create custom projects tailored to your requirements. Our services include:
          </p>
          
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      {/* Our Services Section */}
      <div className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <div className="service-icon">📘</div>
            <h3>Domain Selection and Guidance</h3>
            <p>Expert advice on choosing the perfect project domain.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">📄</div>
            <h3>Base Paper Preparation</h3>
            <p>Customized base papers aligned with your project goals.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">📊</div>
            <h3>PowerPoint Presentation (PPT)</h3>
            <p>Professional presentations to enhance your project delivery.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">📝</div>
            <h3>Final Report Writing</h3>
            <p>Detailed and accurate final reports for your projects.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🤝</div>
            <h3>Mentor Meetings</h3>
            <p>One-on-one meetings with mentors for project guidance.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🎓</div>
            <h3>Project Explanations</h3>
            <p>Comprehensive project explanations to ace your evaluations.</p>
          </div>
        </div>
        <button className="view-more-button">View More</button>
      </div>
      

      {/* Footer Section */}
      <footer className="footer-section">
        <h2 className="footer-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-item">
            <div className="contact-icon">🎓</div>
            <p>End-to-end academic project guidance for students.</p>
          </div>
          <div className="contact-item">
  <div className="contact-icon">📄</div>
  <p>IEEE and ScienceDirect</p>
</div>

          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <p>0001021@proton.me</p>
          </div>
        </div>
        <h2 className="footer-title">Follow Us</h2>
        <div className="social-icons">
          <a href="#" className="social-icon">🌐</a>
          <a href="http://instagram.com/0001021.00" className="social-icon" target="_blank" rel="noopener noreferrer">  
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={{ width: "24px", height: "24px" }} />
</a>
<a href="https://ieeexplore.ieee.org/" className="social-icon" target="_blank" rel="noopener noreferrer">
  <i className="fa fa-laptop" style={{ fontSize: "24px" }}></i> {/* Random Icon */}
</a>

        </div>
        <p className="footer-text">&copy; 2025 All Rights Reserved By 0001021Forms</p>
      </footer>
    </div>
  );
};

export default HomeContent;
