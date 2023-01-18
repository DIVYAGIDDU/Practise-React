import React, { useEffect, useState } from 'react'
import  {Link, useNavigate} from 'react-router-dom' 
const Employee = () => {
  const[empData,setEmpData]=useState(null)
  const navigate=useNavigate()
  const LoadDetails=(id)=>{
    navigate("/Employee/detail/"+id)
   };
const LoadEdit=(id)=>{
  navigate("/Employee/edit/"+id)
}
const RemoveFunction=(id)=>{
if(window.confirm('Do you wnat to remove')){
  fetch("http://localhost:8000/employee/"+id,{
    method:"DELETE"
  }).then((res)=>{
  alert("Removed Successfully")
  window.location.reload();
  }).catch((err)=>{
 console.log(err.message)
  })
}
}


  useEffect(()=>{
    fetch("http://localhost:8000/employee/").then((res)=>{
  return res.json();
    }).then((resp)=>{
      setEmpData(resp)
    }).catch((err)=>{
      console.log(err.message)
    })
  },[])
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-title'>
         <center><h2>Employee Listing</h2></center> 
        </div>
         <div className='crad-body'>
         <div className='divbtn'>
           <Link  to="Employee/create" className='btn btn-success'>Add New(+)</Link>
         </div>
           <table className='table table-bordered'>
             <thead className='bg-dark text-white'>
               <tr>
                 <td>ID</td>
                 <td>Name</td>
                 <td>Email</td>
                 <td>Phone</td>
                 <td>Action</td>
               </tr>
             </thead>
             <tbody>
             {
               empData &&
              empData.map(item=>(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td >
                   <a className='btn btn-success' id='abc' onClick={()=>{LoadEdit(item.id)}}>Edit</a>
                   <a className='btn btn-danger' id='abc' onClick={()=>{RemoveFunction(item.id)}}>Remove</a>
                   <a className='btn btn-primary' id='abc' onClick={()=>{LoadDetails(item.id)}}>Details</a>
                  </td>
                </tr>
              ))
             }
               
             </tbody>
           </table>
         </div>
      </div>
    </div>
  )
}

export default Employee