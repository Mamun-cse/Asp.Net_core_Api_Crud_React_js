import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
    const {id} = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        categoryName: '',
        createdBy: '',
        isDeleted: false,
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://localhost:7249/api/Category/GetById/id?=${id}`)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`https://localhost:7249/api/Category/Edit`, inputData)
        .then(res => {
            alert("Data Updated Successfully!")
            navigate('/')
        })
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
        <div>
              <label htmlFor="id">ID:</label>
              <input type="number" disabled name='id' className='form-control' value={inputData.id}/>
          </div>
          <div>
            <label htmlFor="categoryName">Name:</label>
            <input
              type="text"
              name='categoryName'
              className='form-control'
              value={inputData.categoryName}
              onChange={e => setInputData({ ...inputData, categoryName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="createdBy">CreatedBy:</label>
            <input
              type="text"
              name='createdBy'
              className='form-control'
              value={inputData.createdBy}
              onChange={e => setInputData({ ...inputData, createdBy: e.target.value })}
            />
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
          <button className='btn btn-info'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update;
