import React from 'react'
import Cart from './Cart'
import NavPage from '../Pages/Navpage'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Confirm() {
    // const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    // const [cartItems, setCartItems] = useState(cartData);
    function buy() {
        localStorage.removeItem('cart');
        // setCartItems([]);
    }

    const name = JSON.parse(localStorage.getItem('name'))
    const add = JSON.parse(localStorage.getItem('add'))
    const pin = JSON.parse(localStorage.getItem('pin'))
    const mode = JSON.parse(localStorage.getItem('selected'))
    // const d1 = new Date()
    // const d = d1.getDate();
    // const m = d1.getMonth();
    // const y = d1.getFullYear();
    // const date = Date(y, m, d);
    // console.log(date)
    // const ddate=date.setDate(8);

    function mpin() {
        if (document.getElementById('mpin').value.length == 4) {
            alert("Your product is ready to dispatch!!!")
            document.getElementById('mpin').value = '';
            buy();

        }
        else {
            alert("Enter you MPIN correctly!!!")
            document.getElementById('mpin').value = '';

        }
    }
    if (mode === 'Phone Pay' || mode === 'GPay') {
        return (
            <div>
                <NavPage />
                <p>Reciever's name:{name}</p>
                <p>Address:{add}</p>
                <p>Pincode:{pin}</p>
                {/* <p>Delivered by:{ddate}</p> */}
                <label>Enter your MPIN:</label>
                <input type='number' id='mpin'></input><br></br>
                <Link to='/Home'><button onClick={() => { mpin(); }}>Proceed to PAY</button></Link>
            </div>
        )
    }
}

export default Confirm