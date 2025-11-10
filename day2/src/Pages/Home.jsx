import React from 'react'
import NavPage from './Navpage'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return ( 
    <>
    <div className='Home'>
        <NavPage />
        <div className='centre'>
        <p>"From CART to HEART-show your way!!"</p>
        <Link to='/ProductPage'><button >SHOP NOW!!</button></Link>
        </div>
    </div>
    </>
  )
}

export default Home