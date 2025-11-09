import React from 'react'

import { useState } from 'react'
import './style.css'

function Like() {
  const [like, setLike] = useState(0);

  function Like() {
    setLike(like + 1);
  }
   function decrement(){
    if(like>0)
    setLike(like-1);
  else{
    setLike(0);
  }
   }
   function reset(){
    setLike(0);
   }

  return (
    <div className='butcard'>
      <button onClick={() => { Like(); }}>
        <i class="fa-regular fa-heart"></i>
      </button>
      <p>{like}</p>
      <button onClick={() => { decrement(); }}>-</button>
      <button onClick={() => { reset(); }}>Reset</button>
    </div>
  )
}

export default Like