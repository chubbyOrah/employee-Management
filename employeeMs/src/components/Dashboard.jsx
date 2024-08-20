import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Dashboard = () => {
  return (
    <div className="d-flex">
      <div className="bg-dark text-white vh-100 p-3">
        <h3 className="mb-4">
          <Link to="/dashboard" className="text-white text-decoration-none">
            <i className=" me-2"></i> CWC
          </Link>
        </h3>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/dashboard/dashboard" className="nav-link text-white">
              <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/dashboard/employee" className="nav-link text-white">
              <i className="bi bi-people me-2"></i> Manage employees
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/dashboard/category" className="nav-link text-white">
              <i className="bi bi-card-list me-2"></i> Category
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/dashboard/profile" className="nav-link text-white">
              <i className="bi bi-person me-2"></i> Profile
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/dashboard" className="nav-link text-white">
              <i className="bi bi-box-arrow-right me-2"></i> Logout
            </Link>
          </li>
        </ul>
      </div>

      <div className="col p-0 m-0">
        {/* /* Content of the dashboard will go here */ }

<div className='p-2 d-flex justify-content-center shadow'>
  <h4>Employee Management System</h4>
</div>
    <Outlet>
      
    </Outlet>
      </div>

    </div>
  );
};

export default Dashboard;
