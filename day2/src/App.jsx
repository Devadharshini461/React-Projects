import React from 'react'
import './Pages/style.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Productpage from './Pages/Productpage.jsx'
import NavPage from './Pages/Navpage.jsx'
import Cart from './Components/Cart.jsx'
import Buy from './Components/Buy.jsx'
import Confirm from './Components/Confirm.jsx';
import Routepage from './Routing/Routing.jsx'

function App() {
  return (
    <div>
      <Routepage />
      {/* <NavPage /> */}
      {/* <Productpage />
      <Cart />
      <Buy />
      <Confirm /> */}
      
      
    </div>
  )
}

export default App
