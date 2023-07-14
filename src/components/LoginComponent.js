import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginComponent.css';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    let isValid = true;

    // Email validation
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long, contain one capital letter, one symbol, and one numeric value'
      );
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      // Proceed with login logic
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className="error">{emailError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <span className="error">{passwordError}</span>}
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
        <p>
          Forgot your password? <Link to="/reset-password">Reset Password</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginComponent;
