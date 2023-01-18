import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EmpEdit = () => {
  
  const {empId}=useParams()
 // const[empData,empDataChange]=useState({});
  useEffect(()=>{
    fetch("http://localhost:8000/employee/"+empId).then((res)=>{
      return res.json();
        }).then((resp)=>{
          setId(resp.id)
          Setname(resp.name);
          setEmail(resp.email);
          setPhone(resp.phone);
          setActive(resp.active);
        }).catch((err)=>{
          console.log(err.message)
        })
  },[])
  const[id,setId]=useState("")
    const[name,Setname]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[active,setActive]=useState(true);
    const[validation,setValidation]=useState(false)
  const navigate=useNavigate();

    const submitHandler=(e)=>{
     e.preventDefault()
     const empData=({id,name,email,phone,active})

     fetch(" http://localhost:8000/employee"+empId,{
        method:"PUT",
       headers:{"content-type":"application/json"},
       body:JSON.stringify(empData)
     }).then((res)=>{
        alert("Saved Successfully.")
        navigate('/')
     }).catch((err)=>{
        console.log(err.mesage)
     })
    }

  return (
    <div>
    <div className='row'>
      <div className='offset-lg-3 col-lg-6'>
        <form className='container' onSubmit={submitHandler}>
           <div className='card'>
             <div className='card-title'>
              <center><h2>Employee Edit</h2></center> 
             </div>
             <div className='card-body'>
               <div className='row'>

                 <div className='col-lg-12'>
                   <div className='form-group'>
                     <label>ID</label>
                     <input value={id} disabled="disabled" className='form-control' />
                   </div>
                 </div>

                 <div className='col-lg-12'>
                 <div className='form-group'>
                   <label>Name</label>
                   <input  value={name} required onMouseDown={e=>setValidation(true)} onChange={e=>Setname(e.target.value)} className='form-control' />
                  {name.length==0 && validation && <span className='text-danger'>Enter your Name</span>}
                   </div>
               </div>
               <div className='col-lg-12'>
               <div className='form-group'>
                 <label>Email</label>
                 <input className='form-control'   value={email}   onChange={e=>setEmail(e.target.value)}/>
               </div>
             </div>
             <div className='col-lg-12'>
             <div className='form-group'>
               <label>Phone</label>
               <input className='form-control'   value={phone}  onChange={e=>setPhone(e.target.value)} />
             </div>
           </div>

           <div className='col-lg-12'>
           <div className='form-check'>
           <input className='form-check-input' type="checkbox"   checked={active}  onChange={e=>setActive(e.target.checked)}/>
             <label className='form-check-label'>Is Active</label>
           </div>
         </div>

         <div className='col-lg-12'>
           <div className='form-group'>
             <button className='btn btn-success' type='submit'>Save</button>
             <Link to="/" className='btn btn-danger'>Back</Link>
           </div>
         </div>
               </div>
             </div>
           </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default EmpEdit