import React from 'react'
import Signin from '../Components/Signin'
import Home from '../Pages/Home';;
import { Routes, Route } from "react-router-dom";
import TaskPage from '../Components/TaskPage';
import History from '../Components/History';
import Deleted from '../Components/Deleted';
import Completed from '../Components/Completed';

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path='/TaskPage' element={<TaskPage/>}></Route>
        <Route path='/completed' element={<Completed/>}></Route>
        <Route path='/history' element={<History/>}></Route>
        <Route path='/deleted' element={<Deleted/>}></Route>
    </Routes>
  )
}
//main.jsx la browser routerla podanum

export default Routing