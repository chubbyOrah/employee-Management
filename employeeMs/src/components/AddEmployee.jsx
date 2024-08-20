import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        password: '',
        salary: '',
        address: '',
        // image: ''
    });

    const [error, setError] = useState("");  // Define the error state
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/auth/addemployee', employee)
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/employee');
                } else {
                    setError(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    return (
        <div className='d-flex justify-content-center align-items-center h-75'>
            <div className='p-3 rounded w-25 border'>
                <h2 className="text-center"><strong>Add Employee</strong></h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-white"><strong>Name:</strong></label>
                        <input 
                            type='text' 
                            name='name' 
                            id='name' 
                            autoComplete='off' 
                            placeholder='Enter name' 
                            onChange={handleChange} 
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-white"><strong>Email:</strong></label>
                        <input 
                            type='email' 
                            name='email' 
                            id='email' 
                            autoComplete='off' 
                            placeholder='Enter email' 
                            onChange={handleChange} 
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-white"><strong>Password:</strong></label>
                        <input 
                            type='password' 
                            name='password' 
                            id='password' 
                            autoComplete='off' 
                            placeholder='Enter password' 
                            onChange={handleChange} 
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label text-white"><strong>Salary:</strong></label>
                        <input 
                            type='text' 
                            name='salary' 
                            id='salary' 
                            autoComplete='off' 
                            placeholder='Enter salary' 
                            onChange={handleChange} 
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label text-white"><strong>Address:</strong></label>
                        <input 
                            type='text' 
                            name='address' 
                            id='address' 
                            autoComplete='off' 
                            placeholder='Enter address' 
                            onChange={handleChange} 
                            className='form-control rounded-0'
                        />
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="image" className="form-label text-white"><strong>Image:</strong></label>
                        <input 
                            type='text' 
                            name='image' 
                            id='image' 
                            autoComplete='off' 
                            placeholder='Enter image URL or base64 string' 
                            onChange={handleChange} 
                            className='form-control rounded-0'
                        />
                    </div> */}

                    {error && <p className="text-danger">{error}</p>}
                    
                    <button type="submit" className='btn btn-success w-100 rounded-0 mb-2'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;
