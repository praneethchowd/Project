// src/pages/ProfilePage.js
import React from 'react';
import { useUser } from '../context/UserContext';

const ProfilePage = () => {
  const { user, logout } = useUser(); // Access user data and logout function from context

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h2>Welcome, {user.email}</h2> {/* Display user's email (or other info) */}
      <button onClick={logout}>Logout</button> {/* Logout button */}
    </div>
  );
};

export default ProfilePage;
