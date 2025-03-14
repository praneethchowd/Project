// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from 'usercontext.js/context/UserContext'; // Custom hook to access user context

const LoginPage = () => {
  const { login } = useUser(); // Access the login function from context
  const history = useHistory();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For simplicity, we simulate login (replace with real authentication API call)
    const userData = { email };  // In a real app, you'd fetch this from an API
    
    login(userData); // Save user data in global state
    history.push('/profile'); // Redirect user to profile page after login
  };

  return (
    <div>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
