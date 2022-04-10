// Import Modules
import Product from "./classes/Product.js";
import Inventary from "./classes/Inventary.js";
import ShoppingCart from "./classes/ShoppingCart.js";

import cartProducts from "./functions/cartProducts.js";

import {darkMode, brightMode} from "./app.js"


// The object Inventary contains an array of all the prodcuts
let inventary = new Inventary([]);

// Verifies if Inventary is in Session Storage
if (sessionStorage.getItem('inventary')) {
    // The inventary is stored in Session Storage
    let sessionStorageInventaryString = sessionStorage.getItem('inventary');
    let sessionStorageInventary = JSON.parse(sessionStorageInventaryString);
    inventary['products'] = sessionStorageInventary;
} else {
    // Create Inventary
    let productList = createInventary();
    inventary['products'] = productList;
}


// Get the cart from session storage
let cart = new ShoppingCart([]);

// Verifies if Cart is in Session Storage
if (sessionStorage.getItem('cart')) {
    // The cart is stored in Session Storage
    let sessionStorageCartString = sessionStorage.getItem('cart');
    let sessionStorageCart = JSON.parse(sessionStorageCartString);
    cart['products'] = sessionStorageCart;
} else {
    // Set empty cart in session storage
    sessionStorage.setItem('cart', "");
}

let cb = inventary.getProduct(1);
cart.addProduct(cb);
cart.addProduct(cb);
cart.addProduct(cb);
cart.addProduct(cb);
cart.addProduct(cb);

let wp = inventary.getProduct(21);
cart.addProduct(wp);

let crea = inventary.getProduct(25);
cart.addProduct(crea);


// Cart Charge Data
cartLoadData();


// Open Cart
const cartOverlay = document.getElementById('cart-overlay');
const emptyCartToast = document.getElementById('empty-cart-toast');

const cartButton = document.getElementById('shopping-cart-button');

cartButton.addEventListener('click', () => {
    if (cart.products.length != 0) {
        cartOverlay.style.transform = "translateX(0)";
    } else {
        // The Cart is empty
        emptyCartToast.style.opacity = 1;
        emptyCartToast.style.pointerEvents = "all";
        emptyCartToast.style.animation = "toastAlert 0.8s ease";

        setTimeout(() => {
            emptyCartToast.style.opacity = 0;
            emptyCartToast.style.pointerEvents = "none";
            emptyCartToast.style.animation = "none";
        }, 2500);
    }
});

const closeCartButton = document.getElementById('close-cart-button');
closeCartButton.onclick = () => {
    cartOverlay.style.transform = "translateX(460px)";
}


// Add Decrease product quantity buttons
const subButton = document.querySelectorAll('#sub-button');
const plusButton = document.querySelectorAll('#plus-button');

subButton.forEach((element) => {
    element.onclick = (e) => {
        let product = e.target.parentNode;
        let elementId = product.getAttribute('id');
        let productId = elementId.substring(11);
        
        let prod = inventary.getProduct(productId);
        prod.cartQuantity--;

        const productAmount = e.target.nextSibling.nextSibling;
        productAmount.innerHTML = `${prod.cartQuantity}`;

        const productTotalPrice = e.target.parentNode.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.lastChild;
        productTotalPrice.innerHTML = `${prod.cartQuantity * prod.price}`;

        if (prod.cartQuantity == 0) {
            const productCard = e.target.parentNode.parentNode.parentNode;
            productCard.remove();
            cart.removeProduct(prod);
        }

        cartUpdateData();

        if (cart.products.length == 0) {
            cartOverlay.style.transform = "translateX(460px)";
        }
    }
});

plusButton.forEach((element) => {
    element.onclick = (e) => {
        let product = e.target.parentNode;
        let elementId = product.getAttribute('id');
        let productId = elementId.substring(11);
        
        let prod = inventary.getProduct(productId);
        prod.cartQuantity++;

        const productAmount = e.target.previousSibling.previousSibling;
        productAmount.innerHTML = `${prod.cartQuantity}`;

        const productTotalPrice = e.target.parentNode.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.lastChild;
        productTotalPrice.innerHTML = `${prod.cartQuantity * prod.price}`;

        cartUpdateData();
    }
});


// Delete product from cart
const deleteProductButton = document.querySelectorAll('#delete-product');
deleteProductButton.forEach((element) => {
    element.onclick = (e) => {
        let product = e.target;
        let elementClass = product.getAttribute('class');

        let productId = elementClass.substring(3);
    
        let prod = inventary.getProduct(productId);
        prod.cartQuantity = 0;

        const productAmount = e.target.previousElementSibling.lastElementChild.firstElementChild.nextElementSibling;
        productAmount.innerHTML = `${prod.cartQuantity}`;

        const productTotalPrice = e.target.nextElementSibling.firstElementChild;
        productTotalPrice.innerHTML = `${prod.cartQuantity * prod.price}`;

        const productCard = e.target.parentNode;
        productCard.remove();
        cart.removeProduct(prod);

        cartUpdateData();

        if (cart.products.length == 0) {
            cartOverlay.style.transform = "translateX(460px)";
        }
    }
});


// Function that loads the data in the cart
function cartLoadData() {
    const cartProductList = document.getElementById('cart-products');
    let cartProductsInnerHTML = cartProducts(cart.products);
    cartProductList.innerHTML = cartProductsInnerHTML;
    
    const cartAmount = document.getElementById('cart-amount');
    cartAmount.innerHTML = `${cart.productsAmount()}`;
    
    const cartSubtotal = document.getElementById('cart-subtotal');
    cartSubtotal.innerHTML = `${cart.subtotal()}`;
    
    const cartVat = document.getElementById('cart-vat');
    cartVat.innerHTML = `${cart.calculateVAT()}`;
    
    const cartShipping = document.getElementById('cart-shipping');
    cartShipping.innerHTML = `${cart.shipping()}`;
    
    const cartTotal = document.getElementById('cart-total');
    cartTotal.innerHTML = `${cart.total()}`;
}

// Function that updates the data in the cart
function cartUpdateData() {
    const cartAmount = document.getElementById('cart-amount');
    cartAmount.innerHTML = `${cart.productsAmount()}`;
    
    const cartSubtotal = document.getElementById('cart-subtotal');
    cartSubtotal.innerHTML = `${cart.subtotal()}`;
    
    const cartVat = document.getElementById('cart-vat');
    cartVat.innerHTML = `${cart.calculateVAT()}`;
    
    const cartShipping = document.getElementById('cart-shipping');
    cartShipping.innerHTML = `${cart.shipping()}`;
    
    const cartTotal = document.getElementById('cart-total');
    cartTotal.innerHTML = `${cart.total()}`;
}