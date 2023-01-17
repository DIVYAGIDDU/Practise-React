import React, { useEffect, useState } from "react";
import './Clock.css'
const clock=()=>{
let[currentTime,setCurrentTime]=useState(new Date().toLocaleDateString())

useEffect=(()=>{
  setInterval(()=>{
    setCurrentTime(new Date().toLocaleDateString())
  },[])
},[1000])

    return <div className="card">
      <div className="header">
          <h1>Digital Clock</h1>
      </div>
      <div className="body">
        <h1>{currentTime}</h1>
      </div>
    </div>
}
export default clock