import React, { useState } from 'react'
import  './Counter.css'

const Counter=()=>{
    let[counter,setCounter]=useState(0)
  let incrHandler=()=>{
    setCounter(counter+1)
  }

  let decrHandler=()=>{
    setCounter(counter-1)
    if(counter<=0){
        setCounter(counter=0)
    }
  }
  
    return (
    <div className='count'>
      <button onClick={incrHandler}>INCR</button>
      <h1>{counter}</h1>
      <button onClick={decrHandler}>DECR</button>
    </div>
  )
}

export default Counter