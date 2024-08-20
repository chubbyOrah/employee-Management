import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Employee = () => {
   const [employee, setEmployee]= useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/auth/employee')
    .then(result => {
        if(result.data.Status){
            setEmployee(result.data.Result);
        }else{
            alert(result.data.Error)
        }

    }).catch(err => console.log(err))
})
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Category  List</h3>
        </div>
        <Link to = "/dashboard/addemployee" className='btn btn-success'>Add Employee</Link>
        <div className='mt-3'>
            <table className='table shadow'> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        {/* <th>Password</th> */}
                        <th>Salary</th>
                        <th>Address</th>


                    </tr>
                </thead>
                <tbody>
                        {
                            employee.map(emp => (
                                <tr key={emp.id}> {/* Use a unique key for each row */}
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    {/* <td>{emp.password}</td> Consider not displaying passwords */}
                                    <td>{emp.salary}</td>
                                    <td>{emp.address}</td>
                                    <td>
                                      <button className='btn btn-info btn-sm'> Edit</button>
                                      <button className='btn btn-warning btn-sm'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        </div>
        </div>
  );
};

export default Employee;
