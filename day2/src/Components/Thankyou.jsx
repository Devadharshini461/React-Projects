import React from 'react'
import { Link } from 'react-router-dom';

function Thankyou() {
     const amt = JSON.parse(localStorage.getItem('total'))

     function buy() {
        localStorage.removeItem('cart');
        // setCartItems([]);
    }

  return (
    <div className='thankyou'>
        <p> ${amt} Received!! </p>
        <p>Your product is ready to dispatch!!!`</p>
        <Link to='/'><button onClick={() => { buy(); }}>Move to Home</button></Link>
        
    </div>
  )
}

export default Thankyou