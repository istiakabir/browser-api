const addCart = () => {
    const inputText = document.getElementById('product-input');
    const input = inputText.value;
    //display product
    displayProduct(input);

    //save to local storage
    addProductToCart(input);

    inputText.value = '';
};

const displayProduct = name => {
    const ul = document.getElementById('ul');
    let li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
};

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = name => {
    const cart = getCart();
    cart[name] = 1;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
