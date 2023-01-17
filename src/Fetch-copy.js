import React, { useEffect, useState } from 'react'
const Fetch = () => {

  let[user,setUser]=useState({})
    
useEffect(()=>{
  fetch("https://rickandmortyapi.com/api/character/?page=19")
  .then((res)=>res.JSON())
  .then((data)=>{
    console.log(data)
    setUser(results.data)
  })
 
},[])
  return (
    <div className='container'>
    <pre>{JSON.stringify(user)}</pre>
     <h1>Fetch Method</h1>
      <div className='row'>
        <div className='col'>
        {
          Object.keys(user).map((a)=>{
            return <div className='card'>
            <div className='card-header'>
            <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg" alt="no-pic"/>
            </div>
            <div className='card-body'>
                  <li className='list-group-item'>{a.name}</li>
                  <li className='list-group-item'>{a.status}</li>
            </div>
          </div>
          })
        }      
        </div>
      </div>
    
    </div>
  )
}

export default Fetch