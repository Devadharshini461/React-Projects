import React from 'react'
import {Link} from 'react-router-dom'

function Signin() {
    function signin(){
        localStorage.setItem('email',JSON.stringify(document.getElementById('id').value.trim));
        alert("Sign-in successful");
    }

  return (
    <div className='signin'>
        <label>Email:</label>
        <input type='email' id='email' placeholder='Enter your email'></input>
        <label>Password:</label>
        <input type='password'></input>
        <Link to='/TaskPage'><button onclick={signin}>Signin</button></Link>
    </div>
  )
}

export default Signin