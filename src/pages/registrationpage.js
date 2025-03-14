// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from 'usercontext.js/context/UserContext';

const RegisterPage = () => {
  const { login } = useUser(); // Access the login function from context
  const history = useHistory();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For simplicity, simulate registration (replace with real registration API call)
    const userData = { email }; // You would include more user data (like name) here
    
    login(userData); // Save user data in global state
    history.push('/profile'); // Redirect user to profile page after registration
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
