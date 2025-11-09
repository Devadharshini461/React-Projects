import { Routes, Route } from "react-router-dom";
import React from 'react'
import Navbar from "../Components/Navbar";
import Productpage from "../Pages/Productpage";
import Confirm from "../Components/Confirm";
import Buy from "../Components/Buy";
import Cart from "../Components/Cart";
import Home from "../Pages/Home";

function Routepage() {
    return (
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Productpage' element={<Productpage/>}/>
            <Route path='/Confirm' element={<Confirm/>}/>
            <Route path='/Buy' element={<Buy/>}/>
            <Route path='/Cart' element={<Cart/>}/>
        </Routes>
    
    )
}

export default Routepage