import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


function  Home() { 
  const [data, SetData] = useState([])  
  useEffect(()=>{
    axios.get('https://localhost:7249/api/Category/GetAll')
    .then(res => SetData(res.data))
    .catch(err =>console.log(err))

  },[])
  return (
    
    <div className = 'container'>
      <h2>Category</h2>
      <Link to="/create" className='btn btn-success my-3'>Create +</Link>
      <table className = 'table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>CreatedBy</th>
            <th>IsDeleted</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,i)=> (
            <tr key = {i}>
              <td>{d.id}</td>
              <td>{d.categoryName}</td>
              <td>{d.createdBy}</td>
              <td>{d.isDeleted.toString()}</td>
              <td>
              <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${d.id}`}>Update</Link>
              <button className='text-decoration-none btn btn-sm btn-danger' onClick={e => handleDelete(d.id)}>Delete</button>
              <Link className='text-decoration-none btn btn-sm btn-primary' to={`/read/${d.id}`}>View</Link>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
  function handleDelete(id) {
    const confirm = window.confirm("Do you like to Delete?");
    if(confirm) {
        axios.delete(`https://localhost:7249/api/Category/Delete?id=${id}`)
        .then(res => {
            alert("Record Deleted");
            
        })
    }
  }
}

export default  Home