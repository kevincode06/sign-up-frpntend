import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from './LoginValidation'; 

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({}); // Initialize errors as an object

  const navigate = useNavigate(); // Initialize navigate only once

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values)); // Ensure validation function exists

    // Check if there are no errors before submitting
    if (errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/login', values)
        .then((res) => {
          if (res.data === "success") {
            navigate('/home'); // Redirect to home on success
          } else {
            alert("No account found");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              name="email" 
              onChange={handleInput} 
              className="form-control rounded-0" 
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password"><strong>Password</strong></label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              name="password" 
              onChange={handleInput} 
              className="form-control rounded-0" 
            />
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </div>

          <br />
          <button type="submit" className="btn btn-success w-100 rounded-0">Log in</button>
          <p>You agree to the terms and conditions</p>
          <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
