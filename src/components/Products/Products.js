import React, { useEffect, useState } from 'react';
import { totalPrice } from '../../utilities/fakeDb';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const getTotal = totalPrice(products);

    return (
        <div>
            <h3>Money Needed: <span style={{color: '#008000'}}>{getTotal}</span>$ </h3>
            {
                products.map(product => <Product product={product} key={product.id}></Product>)
            }
        </div>
    );
};

export default Products;