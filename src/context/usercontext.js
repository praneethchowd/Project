// src/context/UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create context for user data
const UserContext = createContext();

// Custom hook to use user context
export const useUser = () => useContext(UserContext);

// UserProvider to wrap around your app and manage user state
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Default user state is null

  const login = (userData) => setUser(userData); // Login function to set user data
  const logout = () => setUser(null); // Logout function to clear user data

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
