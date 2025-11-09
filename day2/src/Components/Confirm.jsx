import React from 'react'
import Cart from './Cart'
import NavPage from '../Pages/Navpage'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Confirm() {
    // const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    // const [cartItems, setCartItems] = useState(cartData);


    const name = JSON.parse(localStorage.getItem('name'))
    const add = JSON.parse(localStorage.getItem('add'))
    const pin = JSON.parse(localStorage.getItem('pin'))
    const mode = JSON.parse(localStorage.getItem('selected'))
    const navigate = useNavigate();

    // const d1 = new Date()
    // const d = d1.getDate();
    // const m = d1.getMonth();
    // const y = d1.getFullYear();
    // const date = Date(y, m, d);
    // console.log(date)
    // const ddate=date.setDate(8);

    function buy() {
        localStorage.removeItem('cart');
        // setCartItems([]);
    }

    function mpin() {
        if (document.getElementById('mpin').value.length == 4) {
            // alert(` ${amt} Received!! \n Your product is ready to dispatch!!!`)
            // document.getElementById('mpin').value = '';
            // buy();
            navigate('/Thankyou');

        }
        else {
            alert("Enter you MPIN correctly!!!")
            document.getElementById('mpin').value = '';

        }
    }
    if (mode === 'Phone Pay' || mode === 'Gpay') {
        return (
            <>
                <NavPage />
                <div className='confirm'>
                    <p>Reciever's name:{name}</p>
                    <p>Address:{add}</p>
                    <p>Pincode:{pin}</p>
                    {/* <p>Delivered by:{ddate}</p> */}
                    <label>Enter your MPIN:</label>
                    <input type='number' id='mpin'></input><br></br>
                    <button onClick={() => { mpin(); }}>Proceed to PAY</button>
                </div>
            </>
        )
    }
    // else if(mode=='Cash on Delivery'){
    else {
        return (
            <>
                <NavPage />
                <div className='confirm'>
                    <p>Reciever's name:{name}</p>
                    <p>Address:{add}</p>
                    <p>Pincode:{pin}</p>
                    {/* <p>Delivered by:{ddate}</p> */}
                    <p>Your Order is Ready to dispatch!!</p>
                    <Link to='/'><button onClick={() => { buy(); }} >Move to Home</button></Link>
                </div>
            </>

        );
    }
}

export default Confirm