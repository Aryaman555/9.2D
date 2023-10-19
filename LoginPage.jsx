import React, { useState } from 'react';
import Input from '../Input';
import { useNavigate } from 'react-router-dom';
import { signinAuthUserWithEmailAndPassword } from '../Utils/firebase';
import '../CSS/Login.css';
import Header from '../Header'; // Import the Header component

const Login = (props) => {
  const [contact, setContact] = useState({
    email: '',
    password: '',
  });

  const { email, password } = contact;
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

    try {
      const response = await signinAuthUserWithEmailAndPassword(email, password);
      navigate('/logout');
      alert('Success! You have logged in');
    } catch (error) {
      alert('Login failed. Incorrect email or password');
    }
  };

  return (
    <div>
      <Header className="differentHeader" /> {/* Include the Header with the different class */}
      <div className="center_login">
        <button className="signup" onClick={() => navigate('/signup')}>
          Sign up instead
        </button>

        <h1>Your email</h1>
        <Input
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />

        <br></br>

        <h1>Your password</h1>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={contact.password}
        />

        <br></br>

        <button className="button" onClick={handleSubmit}>
          Sign in
        </button>
        <br></br>
      </div>
    </div>
  );
};

export default Login;
