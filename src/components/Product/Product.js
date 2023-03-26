import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakeDb';
import './Product.css';

const Product = (props) => {
    const {id, name, price} = props.product;
    const addToCart = (id) => {
        addToDb(id);
        // console.log('added successful!', id);
    }

    const removeFromCart = id => {
        removeFromDb(id);
        // console.log('removing item', id);
    }

    return (
        <div className='product-container'>
            <h2>Id: {id} </h2>
            <h2>Product Name: {name} </h2>
            <h3>Product Price: {price}$ </h3>
            <button onClick={ () => addToCart(id)}>Add to Cart</button>
            <button style={{marginLeft: '5px'}} onClick={ () => removeFromCart(id)}>Remove Item</button>
        </div>
    );
};

export default Product;