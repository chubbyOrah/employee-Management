import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
 const [error, setError] = useState(null);

  const navigate = useNavigate();
  axios.defaults.withCredentials = true; //to store cookies

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/auth/adminlogin', values)
      .then(result => {
        if (result.data.loginStatus){
        navigate('/dashboard')
    }else{
setError(result.data.Error)
    } 

      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>

        <div className='text-warning'>
{error && error}
        </div>
        <h2 className="text-center"><strong>Login Page</strong></h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white"><strong>Email:</strong></label>
            <input 
              type='email' 
              name='email' 
              id='email'
              autoComplete='off' 
              placeholder='Enter email' 
              onChange={(e) => setValues({...values, email: e.target.value})} 
              className='form-control rounded-0'
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white"><strong>Password:</strong></label>
            <input 
              type='password' 
              name='password' 
              id='password'
              placeholder='Enter password' 
              onChange={(e) => setValues({...values, password: e.target.value})}
              className='form-control rounded-0'
            />
          </div>
          <button type="submit" className='btn btn-success w-100 rounded-0 mb-2'>Submit</button>
          <div className="mb-1">
            <input type='checkbox' name='tick' id='tick' className='me-2' />
            <label htmlFor="tick">You agree with our terms & conditions</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;