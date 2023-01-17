import React, { useState } from 'react'
 import './Calculator.css'
const Calculator=()=>{

  const[cal,setCal]=useState("");
  const[result,setResult]=useState("");

  const operators=['/','*','+','-','.'];
    
  const updateCal=(value)=>{
    if(
      operators.includes(value) && cal === '' ||
      operators.includes(value) && operators.includes(cal.slice(-1))
    ){
      return;
    }
     setCal(cal+value);
     if(!operators.includes(value)){
      setResult(eval(cal+value).toString());
     }
  }

     const createDigits=()=>{
        const digits=[];
        for(let i=1; i<10; i++){
            digits.push(
                <button onClick={()=>updateCal(i.toString())} key={i}>{i}</button>
            )
        }
        return digits
     }
     const calculator=()=>{
         setCal(eval(cal).toString());
     }
     const deleteLast=()=>{
      if(cal==""){
        return;
      }
      const value=cal.slice(0,-1);
      setCal(value);
     }
  return (
    <div className='main-page'>
      <div className='calculator'>
         <div className='display'>
           {result ? <span>({result})</span>: ""}
           &nbsp;
           {cal || "0"}
         </div>

         <div className='operators'>
           <button onClick={()=>updateCal('/')}>/</button>
           <button onClick={()=>updateCal('*')}>*</button>
           <button onClick={()=>updateCal('+')}>+</button>
           <button onClick={()=>updateCal('-')}>-</button>

           <button onClick={deleteLast}>DEL</button>
         </div>

         <div className='digits'>
         {createDigits()}
           <button onClick={()=>updateCal('0')}>0</button>
           <button onClick={()=>updateCal('.')}>.</button>
           <button onClick={calculator}>=</button>
         </div>
      </div>
    </div>
  )
}

export default Calculator