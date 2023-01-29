import React, { useState ,useEffect} from 'react'
import './Task.css'
const Task = () => {

   let [emailErr, setEmailErr] = useState(null)
  let [nameErr, SetNameErr] = useState(null)
  let [mobileErr, SetMobileErr] = useState(null)
  let [valid, setValid] = useState(false)
  let [userDetails, setUserDetails] = useState({
   name: "",
   email: "",
   mobile: ""
 })

 let getData = (event) => {
   setUserDetails({ ...userDetails, [event.target.name]: event.target.value })
 }

 useEffect(() => {
   if (valid === true) {
     validateFun(userDetails)
   }
 }, [userDetails])

 let submitHandler = (e) => {
   e.preventDefault()
   setValid(true)
   let submit = validateFun(userDetails)
   if (submit === true) {
     alert("Form submitted successfully")

   }
 }
 let validateFun = (value) => {
   let name = value.name
   let email = value.email
   let mobile = value.mobile

   if (name === "") {
     SetNameErr("please enter name")
   }
   else if (name.length <= 4 || name.length >= 15) {
     SetNameErr("please enter min 4 and max 10 character only")
   }
   else if (name.length >= 4 || name.length <= 15) {
     SetNameErr("")
   }
   if (email === "") {
     setEmailErr("please enter email")
   }
   else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email)) {
     setEmailErr('Invalid email address')
   }
   else {
     setEmailErr("")
   }
   if (mobile === "") {
     SetMobileErr("please enter Mobile Number")
   }
   else if (mobile.length !== 10) {
     SetMobileErr("please enter min 4 and max 10 character only")
   }
   else if (mobile.length === 10) {
     SetMobileErr("")
   }

   if (nameErr === "" && emailErr === "" && mobileErr === "" ) {
     return true
   }

 }
  return (
    <div className='header'>
       <div className='header-content'>
          <h6>SIMPLE CSS TEMPLATE</h6>
          <h3>WELCOME TO OUR TEAM</h3><br/>
          <button className='entroll-btn'>ENROLL NOW</button><br/>
       </div>
       <div className='container'>
       <div className='card'>
       <div className='card-header text-center  text-white'>
       <h4>Learn More Today</h4><br/>
       <p className='text'>Complte the form below for detailed team information and to be <br/> contacted by phone and email</p>
       </div>
    <div className='card-body'>
    <form onSubmit={submitHandler}>
    <p className='text-white'>SELECT A TEAM</p>
    <div className='select'>
       <select value='select' className='drop-down'>
    <option value="volvo">Select Team</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select><br/><br/>
  <div className='name'>
  <div className='f-name'>
  <label>FIRST NAME</label>
  <input type="text" className='input'  name="name" onChange={getData}  placeholder='First Name'/>
  <h6 className="text-danger">{nameErr}</h6>
  </div>
  <div className='l-name'>
  <label>LAST NAME</label>
  <input type="text" className='input'  name="name" onChange={getData} placeholder='Last Name'/>
  <h6 className="text-danger">{nameErr}</h6>  </div>
  </div><br/>
  <div className='details'>
  <div className='email'>
  <label>EMAIL</label>
  <input type="text" className='input' name="email" onChange={getData} placeholder='Email'/>
  <h6 className="text-danger">{emailErr}</h6>
  </div>
  <div className='number'>
  <label>PHONE NUMBER</label>
  <input type="number"  className='input' name="mobile" onChange={getData} placeholder='Phone Number'/>
  <h6 className="text-danger">{mobileErr}</h6>
  </div>
  </div><br/>
  <div className='form-check'>
  <input className='form-check-input' type="checkbox" />
    <label className='form-check-label text-white'>&nbsp;&nbsp;Yes I Would Like To Receive communication by call / email  &nbsp;&nbsp;about  Brainlabs services.</label>
  </div>
  <di className='btns'>
  <input type="submit" value="Submit" className='btn'/>
  <button className='btn'>RESET</button>
  </di>
  </div>
  </form>
  </div>
       </div>
       </div>
    </div>
  )
}

export default Task