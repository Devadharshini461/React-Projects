import React, { useState } from 'react'

function ProductCard(props) {
    const [quantity, setQuantity] = useState(0);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const Index = cart.findIndex(item => item.name === props.name);

    const saveStorage = (qty) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const Index = cart.findIndex(item => item.name === props.name);

        if (Index !== -1) {
            const newQty = cart[Index].quantity + qty;
            if (newQty > 0) {
                cart[Index].quantity = newQty;
                cart[Index].totalPrice = cart[Index].price * newQty;
            }
            else {
                cart.splice(Index, 1);
            }
        }
        else if (qty > 0) {
            cart.push({
                name: props.name,
                price: props.price,
                quantity: qty,
                totalPrice: props.price * qty,
                image: props.link
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };


    function add() {
        const newQty = quantity + 1;
        setQuantity(newQty);
        saveStorage(1);
    }

    function remove() {
            const newQty = quantity - 1;
            setQuantity(newQty);
            saveStorage(-1);
        
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
                <button onClick={remove}>-</button>
                <button>{Index !== -1 ? cart[Index].quantity : 0}</button>
                {/* <button onClick={() => { reset(); }}>Reset</button> */}
                <button onClick={add}>+</button>
            </div>
        </div>
    )

}

export default ProductCard


