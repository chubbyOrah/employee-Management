import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const addCategory = () => {
    const [category, setCategory] = useState()
    const [result, error, setError] = useState("");  // Define the error state
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/addcategory', {category})
      .then(result =>{

       if (result.data.Status){
        navigate('/dashboard/category')
    }else{
//setError(result.data.Error)
    } }).catch(err => console.log(err));
    } 
    


  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
      <div className='p-3 rounded w-25 border '>
        <h2 className="text-center"><strong>Add Category</strong></h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="category" className="form-label text-white"><strong>Category:</strong></label>
            <input 
              type='text'  name='category'  id='category' autoComplete='off'  placeholder='Enter email' 
              onChange={(e) => setCategory(e.target.value)} className='form-control rounded-0'
            />
          </div>
          
          <button type="submit" className='btn btn-success w-100 rounded-0 mb-2'>Submit</button>
          
        </form>
      </div>
    </div>
  )
}

export default addCategory