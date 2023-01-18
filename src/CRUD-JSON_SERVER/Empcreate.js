import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Empcreate = () => {
    const[id,setId]=useState("")
    const[name,Setname]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[active,setActive]=useState(true);
    const[validation,setValidation]=useState(false)
  const navigate=useNavigate();

    const submitHandler=(e)=>{
     e.preventDefault()
     const empData=({name,email,phone,active})

     fetch(" http://localhost:8000/employee",{
        method:"POST",
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
                <center><h2>Employee Create</h2></center> 
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
               <Link  to="/" className='btn btn-danger'>Back</Link>
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

export default Empcreate