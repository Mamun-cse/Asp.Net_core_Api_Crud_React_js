import axios from 'axios'
import React, { useEffect, useState } from 'react'


function App() {
  const  [apiData, setApiData] = useState('')
  useEffect(()=> {
    async function callApi(){
      const apiResult =await axios.get('https://localhost:7249/api/Category/GetAll')
      setApiData(apiResult.data)
    }
    callApi()
    console.log(apiData)
  },[apiData])
  return (
    <div className='App'>
       <table style = {{width:'800px',margin:'50px auto',
          border:'1px solid #ccc'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>CreatedBy</th>
            <th>CreatedDate</th>
            <th>IsDeleted</th>
          </tr>

        </thead>
        <tbody style={{textAlign:'center', border:'1px solid'}}>
          {
            apiData &&
            (apiData).map((apidetails,index)=>{
              return(
                <tr key = {index}>
                  <td>{apidetails.id}</td>
                  <td>{apidetails.categoryName}</td>
                  <td>{apidetails.createdBy}</td>
                  <td>{apidetails.createdDate}</td>
                  <td>{apidetails.isDeleted.toString()}</td>
                  
                </tr>
              )
            })
          }

        </tbody>
       </table>
    </div>
  );
}
export default App;
