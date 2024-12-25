import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [registrations, setRegistrations] = useState([]);

  const correctUsername = '0001021';
  const correctPassword = '27sastra';

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      fetchRegistrations();
      setShowDetails(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/registrations');
      const data = await response.json();
      setRegistrations(data);
    } catch (error) {
      alert('Error fetching registrations');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Admin Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        style={styles.input} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        style={styles.input} 
      />
      <button onClick={handleLogin} style={styles.button}>Login</button>

      {showDetails && (
        <div style={styles.details}>
          <h3>Registration Details</h3>
          {registrations.map((reg, index) => (
            <div key={index} style={styles.registration}>
              <p><strong>Name:</strong> {reg.name}</p>
              <p><strong>Email:</strong> {reg.email}</p>
              <p><strong>Phone:</strong> {reg.phone}</p>
              <p><strong>College:</strong> {reg.college}</p>
              <p><strong>Project Type:</strong> {reg.projectType}</p>
              <p><strong>Department:</strong> {reg.department}</p>
              <p><strong>Domains:</strong> {reg.domains.join(', ')}</p>
              <p><strong>Comments:</strong> {reg.comments}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  input: {
    width: '300px',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  details: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  registration: {
    marginBottom: '20px',
  },
};

export default AdminPage;
