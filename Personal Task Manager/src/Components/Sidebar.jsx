import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        <Link to='/completed'>Completed Tasks</Link><br></br>
        <Link to='/deleted'>Deleted Tasks</Link><br></br>
        <Link to='/history'>Task History</Link>
    </div>
  )
}

export default Sidebar