import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let price = 0;
    let shipping = 0;
    for (const product of cart) {
        price = price + product.price;
        shipping = shipping + product.shipping;

    }
    const grandTotal = price + shipping;
    const tax = price * 0.1;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h5>Seleceted Items: {cart.length}</h5>
            <h5>Price: $ {price}</h5>
            <h5>Shipping: $ {shipping.toFixed(2)}</h5>
            <h5>Tax: $ {tax.toFixed(2)}</h5>
            <h5>Grand Total: $ {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;