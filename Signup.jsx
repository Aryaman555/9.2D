import React, { useState } from 'react';
import Input from '../Input';
import { Link, useNavigate } from 'react-router-dom';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../Utils/firebase';
import '../CSS/Signup.css';
import Header from '../Header'; // Import the Header component

const Signup = (props) => {
  const [contact, setContact] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = contact;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocFromAuth(user, { displayName });
      alert('Account created! You can now log in');
      navigate('/login');
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      <Header className="differentHeader" /> {/* Include the Header with the different class */}
      <div className="center_signup">
        <h1> Create a Deakin Account</h1>
        <label htmlFor="displayName">Name*</label>
        <Input
          name="displayName"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={contact.displayName}
        />
        <br />
        <label htmlFor="email">Email*</label>
        <Input
          name="email"
          type="email_signup"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />

        <br />
        <label htmlFor="password">Password*</label>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={contact.password}
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password*</label>
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={contact.confirmPassword}
        />

        <br />

        <button className="button" onClick={handleSubmit}>
          Sign up
        </button>

        <br />
        <br />

        <Link to="/login">Login Instead?</Link>
      </div>
    </div>
  );
};

export default Signup;
