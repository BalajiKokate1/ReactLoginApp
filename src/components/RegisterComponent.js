import React, { useState } from 'react';
import '../styles/RegisterComponent.css';

const RegisterComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    let isValid = true;

    // First name validation
    if (!firstName) {
      setFirstNameError('First name is required');
      isValid = false;
    } else if (/\d/.test(firstName)) {
      setFirstNameError('First name should not contain any digit');
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
      setFirstNameError('First name should only contain letters');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    // Last name validation
    if (!lastName) {
      setLastNameError('Last name is required');
      isValid = false;
    } else if (/\d/.test(lastName)) {
      setLastNameError('Last name should not contain any digit');
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
      setLastNameError('Last name should only contain letters');
      isValid = false;
    } else {
      setLastNameError('');
    }

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
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}/.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long, contain one capital letter, one symbol, and one numeric value'
      );
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      // Proceed with registration logic
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstNameError && <span className="error-message">{firstNameError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {lastNameError && <span className="error-message">{lastNameError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <span className="error-message">{passwordError}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterComponent;
