import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='navbar' >
        <div className='logo'><i class="fa-solid fa-list-check"></i>TOTODO</div>
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