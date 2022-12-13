import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;

    const { name, brand, img, price, shipping } = product;


    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-info'>
                <h4>Name: {name}</h4>
                <p><small>Brand: {brand}</small></p>
                <p><small>Price: {price}</small></p>
                <p><small>Shipping: {shipping}</small></p></div>
            <div className='btn'>
                <button onClick={() => handleAddToCart(product)}><small>Add to cart</small></button>
            </div>
        </div>
    );
};

export default Product;