// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from 'usercontext.js/context/UserContext'; // Import UserProvider
import App from './App';

ReactDOM.render(
  <UserProvider> {/* Wrap the app with UserProvider */}
    <App />
  </UserProvider>,
  document.getElementById('root')
);
