import React from 'react';

const AuthButtons = () => {
  const handleLogin = () => {
    // Add login functionality here
    console.log('Login clicked');
  };

  const handleSignup = () => {
    // Add signup functionality here
    console.log('Signup clicked');
  };

  return (
    <div className="auth-buttons">
      <button className="auth-button login-button" onClick={handleLogin}>
        <div className="wave"></div>
        Login
      </button>
      <button className="auth-button signup-button" onClick={handleSignup}>
        <div className="wave"></div>
        Sign Up
      </button>
    </div>
  );
};

export default AuthButtons; 