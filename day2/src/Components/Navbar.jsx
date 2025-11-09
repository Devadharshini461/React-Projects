import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <>
    <nav className='navbar' >
        <div className='logo'><i class="fa-solid fa-bag-shopping"></i>ShopWeb</div>
        <ul className='links' >
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/ProductPage'>Products</Link></li>
          <li><Link to='/Cart'><i class="fa-solid fa-cart-plus"></i></Link></li>
          {/* <li>Login</li>  */}
        </ul>
    </nav>
    </>
  )
  
}

export default Navbar

