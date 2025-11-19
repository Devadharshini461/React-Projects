import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate()
  return (
    <div>
        <nav className='navbar' >
        <div className='logo' onClick={()=>{navigate('/')}}><i class="fa-solid fa-list-check"></i>TASK MANAGER</div>
        {/* <ul className='links' >
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/ProductPage'>Products</Link></li>
          <li><Link to='/Cart'><i class="fa-solid fa-cart-plus"></i></Link></li>
          {/* <li>Login</li>  */}
        {/* </ul> */} 
    </nav>
    </div>
  )
}

export default Navbar