import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [inputData, setInputData] = useState({
    categoryName: '',
    createdBy: '',
    isDeleted: false, // Default value for isDeleted is false (not deleted)
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://localhost:7249/api/Category/Add', inputData)
      .then(res => {
        alert("Data Posted Successfully!")
        navigate('/')
      })
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="categoryName">Name:</label>
            <input type="text" name='categoryName' className='form-control'
              onChange={e => setInputData({ ...inputData, categoryName: e.target.value })} />
          </div>
          <div>
            <label htmlFor="createdBy">CreatedBy:</label>
            <input type="text" name='createdBy' className='form-control'
              onChange={e => setInputData({ ...inputData, createdBy: e.target.value })} />
          </div>
          <div>
            <label htmlFor="isDeleted">isDeleted:</label>
            <input
              type="checkbox"
              name="isDeleted"
              checked={inputData.isDeleted}
              onChange={e => setInputData({ ...inputData, isDeleted: e.target.checked })}
            />
          </div>
          <br />
          <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create;
