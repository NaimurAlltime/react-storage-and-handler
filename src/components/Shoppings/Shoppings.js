import React from 'react';
import { add, multiple } from '../../utilities/calculation';
// import add from '../../utilities/calculation';

const Shoppings = () => {
    const first = 20;
    const second = 20;
    const result = add(first, second);
    const result2 = multiple(first, second);
    return (
        <div>
            <h4>Product Quantity: {result} and {result2} </h4>
        </div>
    );
};

export default Shoppings;