import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmpDetils = () => {
  const {empId}=useParams()
  const[empData,empDataChange]=useState({});
  useEffect(()=>{
    fetch("http://localhost:8000/employee/"+empId).then((res)=>{
      return res.json();
        }).then((resp)=>{
          empDataChange(resp)
        }).catch((err)=>{
          console.log(err.message)
        })
  },[])

  return (
    <div>
  <div className='container'>
    <div className='card row'>
      <div className='card-title'>
       <h2>Employee Details</h2>
      </div>
      <div className='card-body'>
       { empData &&
        <div>
        <h2>The Employee Name is:{empData.name}</h2>
        <h3>Contact Details:</h3>
        <h5>Employee ID:{empData.id}</h5>
        <h5>Email is:{empData.email}</h5>
        <h5>Phone is:{empData.phone}</h5>
        <Link className='btn btn-danger' to="/">Back To Listing</Link>
        </div>
      }
      </div>
    </div>
  </div>
    </div>
  )
}

export default EmpDetils