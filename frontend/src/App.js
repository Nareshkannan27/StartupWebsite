// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomeContent from './components/HomeContent';
import AdminPage from './components/AdminPage';

import './App.css';
import CustomForm from './components/CustomForm';

function App() {
  return (
    <Router>
        
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/form" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/contact" element={<CustomForm />} />
      </Routes>
    </Router>
  );
}

export default App;
