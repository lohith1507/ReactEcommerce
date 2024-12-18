import React, { useContext, useState } from 'react'
import { formConfig } from '../../config/Forms/formConfig'
import { globalContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function Index() {

  const [formData , setFormData ] = useState({email:'', password:''});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {authData} = useContext(globalContext);

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(authData.find(item => (item.email === formData.email && item.password === formData.password))){
      navigate('/dashboard');
    }
    else{
      setError("Invalid Email or Password");
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='shadow p-5 bg-white rounded'>
        <h2 className='text-center mb-4'>Login</h2>
        <form onSubmit={handleSubmit}>
          {formConfig.loginFields.map((field) =>(
            <div key={field.name}>
              <label>{field.label}</label>
              <input
                className='form-control my-2'
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              />
            </div>
          ))}
          {
            <div className='text-danger my-2'>{error}</div>
          }
          <button className='btn btn-primary' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}
