import React from 'react'
import { useState} from 'react'
import './style.css'

function Subscribe() {
    const [sub,setSub]=useState(0);
    
    function Subscribe(){
        setSub(sub+1);
    }
     function decrement(){
      if(sub>0)
    setSub(sub-1);
    else{
      setSub(0);
    }
   }
   function reset(){
    setSub(0);
   }
    
  return (
    <div className='butcard'>
    <button onClick={()=>{Subscribe();}}>
        <i class="fa-solid fa-bell"></i>
    </button>
    <p>{sub}</p>
    <button onClick={()=>{decrement();}}>-</button>
    <button onClick={()=>{reset();}}>Reset</button>
    </div>
  )
}

export default Subscribe