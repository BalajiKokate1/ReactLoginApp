import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (validateEmail(email)) {
        const flowUrl = 'https://prod-21.centralindia.logic.azure.com:443/workflows/efde06afbdbc4f19b1ca30189a1592bb/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=VyJSduVBkNq5BdApesNXZ1GfaOZkGTja7n09t9X3ZKo'; // Replace with your Flow HTTP trigger URL

        try {
          const response = await fetch(flowUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ emailAddress: email })
          });
    
          if (response.ok) {
            console.log('Flow triggered successfully!');
          } else {
            console.error('Error triggering the flow.');
          }
        } catch (error) {
          console.error('Error occurred:', error);
        }
      
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        id="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {emailError && <p className="error">{emailError}</p>}

      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;
