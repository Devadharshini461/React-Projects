import React from 'react'
import { useState} from 'react'
import './style.css'

function Share() {
    const [sha,setShare]=useState(0);
    
    function share(){
        setShare(sha+1);
    }
     function decrement(){
      if(sha>0)
    setShare(sha-1);
    else{
      setShare(0);
    }
   }
   function reset(){
    setShare(0);
   }
    
  return (
    <div className='butcard'>
    <button onClick={()=>{share();}}>
        <i class="fa-solid fa-share"></i>
    </button>
    <p>{sha}</p>
    <button onClick={()=>{decrement();}}>-</button>
    <button onClick={()=>{reset();}}>Reset</button>
    </div>
  )
}

export default Share