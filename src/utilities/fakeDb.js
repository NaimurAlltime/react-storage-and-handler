const addToDb = (id) => {
    let shoppingCart = {};

    // get the shopping cart 
    const storeCart = localStorage.getItem('shopping-cart');

    if(storeCart){
       shoppingCart = JSON.parse(storeCart);
    }


    // add quantity 
    const quantity = shoppingCart[id];
    if(quantity){
       const newQuantity = parseInt(quantity) + 1;
       shoppingCart[id] = newQuantity;
    //    localStorage.setItem(id, newQuantity);
    }
    else{
        // localStorage.setItem(id, 1);
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}


// remove cart 
const removeFromDb = id => {
    // console.log('removing item', id);
    const storeCart = localStorage.getItem('shopping-cart');
    
    if(storeCart){
        const shoppingCart = JSON.parse(storeCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

// cart delete 
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}


// reducer 
const getTotalPrice = (products) => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export { addToDb, removeFromDb, deleteShoppingCart, getTotalPrice as totalPrice };

