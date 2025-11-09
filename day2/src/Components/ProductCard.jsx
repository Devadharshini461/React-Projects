import React, { useState } from 'react'

function ProductCard(props) {
    const [quantity, setQuantity] = useState(0);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const Index = cart.findIndex(item => item.name === props.name);

    const saveStorage = (qty) => {


        if (Index !== -1) {
            qty = cart[Index].quantity + qty
            cart[Index].quantity = qty;
            cart[Index].totalPrice = cart[Index].price * qty;
        }

        else {
            cart.push({
                name: props.name,
                price: props.price,
                quantity: qty,
                totalPrice: props.price * qty,
                image: props.link
            });
        }

        const updatedCart = cart.filter(item => item.quantity > 0);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    function add() {
        if (Index !== -1) {
            const newQty = cart[Index].quantity + 1;
            setQuantity(newQty);
            saveStorage(1);
        }
        else {
            const newQty = quantity + 1;
            setQuantity(newQty);
            saveStorage(1);

        }
    }

    function remove() {
        if (Index !== -1) {
            if (cart[Index].quantity > 0) {
                const newQty = cart[Index].quantity - 1;
                setQuantity(newQty);
                saveStorage(-1);
            }
            else {
                const newQty = 0;
                setQuantity(newQty);
                saveStorage(-1);
            }
        }
        else {
            if (quantity > 0) {
                const newQty = quantity - 1;
                setQuantity(newQty);
                saveStorage(-1);
            }
            else {
                const newQty = 0;
                setQuantity(newQty);
                saveStorage(-1);
            }
        }

    }

    function reset() {
        setQuantity(0);
        saveStorage(0);
    }

    return (
        <div className='div'>
            <img src={props.link}></img>
            <h3>{props.name}</h3>
            <p>$ {props.price}</p>
            {/* <p>{props.qty}</p> */}
            <p>{props.total}</p>
            {/* <p>{quantity}</p> */}
            <div className='buttons'>
                <button onClick={() => { remove(); }}>-</button>
                <button>{quantity}</button>
                {/* <button onClick={() => { reset(); }}>Reset</button> */}
                <button onClick={() => { add(); }}>+</button></div>
        </div>
    )

}

export default ProductCard


