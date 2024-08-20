import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Employee from './components/Employee';
import Category from './components/Category';
import Profile from './components/Profile';
import AddCategory from './components/AddCategory';  // Ensure the component name starts with a capital letter
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/adminlogin' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='employee' element={<Employee />} />
          <Route path='category' element={<Category />} />
          <Route path='profile' element={<Profile />} />
          <Route path='addcategory' element={<AddCategory />} />
          <Route path='addemployee' element={<AddEmployee />} 
          />
        </Route>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
