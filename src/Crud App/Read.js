import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

function Read() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [Data, setdata] = useState([])

    useEffect(() => {
        axios.get(`https://localhost:7249/api/Category/GetById?id=${id}`)
        .then(res => setdata(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className='container'>
        
            <div className='container p-5'>
            <p>{Data.id}</p>
            <p>{Data.categoryName}</p>
            <p>{Data.createdBy}</p>
            <p>{Data.isDeleted? 'True':'False'}</p>
            <Link to="/">Back</Link>
            </div>
    </div>
  )
}

export default Read