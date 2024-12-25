// src/components/LandingPage.js

import React, { useState } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [department, setDepartment] = useState('');

  const showDomains = (event) => {
    setDepartment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      college: document.getElementById('college').value,
      projectType: document.querySelector('input[name="projectType"]:checked').value,
      department: document.getElementById('department').value,
      domains: Array.from(document.querySelectorAll('.form-check-input:checked')).map((input) => input.id),
      comments: document.getElementById('comment').value,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      alert('Error submitting form');
    }
  };
  

  return (
    <div className="landing-page">
      <div className="container">
        <div className="form-container">
          <h2 className="text-center">Project Registration</h2>
          <p className="text-center mb-4">Submit your project request through this form</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="(+91) 000-0000-000"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="college" className="form-label">College Name</label>
              <input
                type="text"
                className="form-control"
                id="college"
                placeholder="Enter your college name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Type of Project</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="projectType"
                  id="miniProject"
                  value="Mini Project"
                  required
                />
                <label className="form-check-label" htmlFor="miniProject">
                  Mini Project
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="projectType"
                  id="finalYearProject"
                  value="Final Year Project"
                  required
                />
                <label className="form-check-label" htmlFor="finalYearProject">
                  Final Year Project
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">Choose Your Department</label>
              <select
                className="form-select"
                id="department"
                required
                onChange={showDomains}
                defaultValue=""
              >
                <option value="" disabled>
                  Please Select
                </option>
                <option value="cse">CSE</option>
                <option value="ece">ECE</option>
              </select>
            </div>
            {department === 'cse' && (
  <div className="mb-3">
    <label className="form-label">Pick your CSE Domains</label>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="deepLearning" />
      <label className="form-check-label" htmlFor="deepLearning">Deep Learning</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="machineLearning" />
      <label className="form-check-label" htmlFor="machineLearning">Machine Learning</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="dataScience" />
      <label className="form-check-label" htmlFor="dataScience">Data Science and Big Data</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="blockchain" />
      <label className="form-check-label" htmlFor="blockchain">Blockchain Technology</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="computerVision" />
      <label className="form-check-label" htmlFor="computerVision">Computer Vision</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="iot" />
      <label className="form-check-label" htmlFor="iot">IoT (Internet of Things)</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="Nlp" />
      <label className="form-check-label" htmlFor="Nlp">NLP (Natural Language Processing)</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="crypto" />
      <label className="form-check-label" htmlFor="crypto">Cryptography and Network Security</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="cloud" />
      <label className="form-check-label" htmlFor="cloud">Cloud Computing</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="cseOther" />
      <label className="form-check-label" htmlFor="cseOther">Other (write in comment box)</label>
    </div>
  </div>
)}

{department === 'ece' && (
  <div className="mb-3">
    <label className="form-label">Pick your ECE Domains</label>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="embeddedSystems" />
      <label className="form-check-label" htmlFor="embeddedSystems">Embedded Systems</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="eceIot" />
      <label className="form-check-label" htmlFor="eceIot">IoT (Internet of Things)</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="wirelessComm" />
      <label className="form-check-label" htmlFor="wirelessComm">Wireless Communication</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="signalProcessing" />
      <label className="form-check-label" htmlFor="signalProcessing">Signal Processing</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="vlsi" />
      <label className="form-check-label" htmlFor="vlsi">VLSI and FPGA</label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="eceOther" />
      <label className="form-check-label" htmlFor="eceOther">Other (write in comment box)</label>
    </div>
  </div>
)}

                
            
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Comments</label>
              <textarea
                className="form-control"
                id="comment"
                rows="3"
                placeholder="Enter any additional comments"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
