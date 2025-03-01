import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './SignupValidation';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values)); // Ensure validation function exists
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-up</h2>
        <form onSubmit={handleSubmit}> {/* ✅ Fixed here */}
          <div className="mb-3">
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" placeholder="Enter your name" name="name" onChange={handleInput} className="form-control rounded-0" />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Enter your email" name="email" onChange={handleInput} className="form-control rounded-0" />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter your password" name="password" onChange={handleInput} className="form-control rounded-0" />
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </div>
          <br />
          <button type="submit" className="btn btn-success w-100 rounded-0">Sign up</button>
          <p>You agree to the terms and conditions</p>
          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Log in</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
