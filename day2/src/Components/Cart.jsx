import React, { useState } from 'react';
import ProductCard from './ProductCard';
import NavPage from '../Pages/Navpage';
import { Link } from 'react-router-dom';

function Cart() {
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  const [cartItems, setCartItems] = useState(cartData);

  let totalAmount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalAmount += cartItems[i].totalPrice;
  }
  localStorage.setItem('total', JSON.stringify(totalAmount))


  const cartList = [];
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    cartList.push(
      <div>
        {/* // <ProductCard link={item.image} name={item.name} price={item.price} qty= {item.quantity} total={item.totalPrice}/> */}

        <img src={item.image} alt={item.name} width="100" ></img>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${item.totalPrice}</p>
      </div>
    );
  }
  //  localStorage.setItem('list', (JSON.stringify(cartList)||'[]'))

  
  return (
    <div className="cart-container">
      <NavPage />
      {/* <h2>Your Cart</h2> */}
      
      {cartItems.length === 0 ? (
        <p>Fill your cart!!!</p>
      ) : (
        <>
        <div className="info">
          {cartList}
          <h3>Grand Total: ${totalAmount}</h3>
          <Link to='/ProductPage'><button >Products</button></Link>
          <Link to='/Buy'><button >SHOP NOW</button></Link>
          </div>
        </>
      )}

    </div>
  );
}

export default Cart;
