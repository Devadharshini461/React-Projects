import React from 'react'
import NavPage from '../Pages/Navpage';
import { Link } from 'react-router-dom';

function Buy() {
        const Total = JSON.parse(localStorage.getItem('total')) || [];
        const item=JSON.parse(localStorage.getItem('list'))
    
        function details(){
            localStorage.setItem('name',JSON.stringify(document.getElementById('name').value))
            localStorage.setItem('add',JSON.stringify(document.getElementById('add').value))
            localStorage.setItem('pin',JSON.stringify(document.getElementById('pin').value))
            localStorage.setItem('selected',JSON.stringify(document.getElementById('selected').value))
        }
    
  return (
    <div>
        <NavPage/>
        <label >Receiver's Name</label>
        <input id='name' type='text' placeholder='Enter Name'></input><br></br>
        <label >Address</label>
        <input id='add' type='text' placeholder='Enter Address '></input><br></br>
        <label >Pincode</label>
        <input id='pin' type='number' placeholder='Enter Pincode'></input><br></br>
        <p>Amount to be paid:{Total}</p>
        <p>{item}</p>
        <span>Mode of Payment:</span>
        <select id='selected'>
            <option>Gpay</option>
            <option>Phone Pay</option>
            <option>Cash on Delivery</option>
        </select><br></br>
       <Link to='/Confirm'><button onClick={()=>{details();}}>Confirm</button></Link> 
    </div>
  )
}

export default Buy