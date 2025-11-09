import React from 'react'
import { useState} from 'react'
import './style.css'


function Comments(props) {
    const [comment,setComment]=useState(0);
    
    function Comment(){
        setComment(comment+1);
    }
   function decrement(){
    if(comment>0){
      setComment(comment-1);}
    else{
      setComment(0);
    }
   }
   function reset(){
    setComment(0);
   }
    
  return (
    <div className='butcard' >
    <button  onClick={()=>{Comment();}}>
      {/* <i {...props.link}></i> */}
        <i class="fa-solid fa-comment"></i>
    </button>
    <p>{comment}</p> 
    <button onClick={()=>{decrement();}}>-</button>
    <button onClick={()=>{reset();}}>Reset</button> 
    </div>
  )
}

export default Comments