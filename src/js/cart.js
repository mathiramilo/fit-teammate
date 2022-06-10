// Import Modules
import Inventary from "./classes/Inventary.js";
import ShoppingCart from "./classes/ShoppingCart.js";

import createInventary from "./functions/createInventary.js";
import cartProducts from "./functions/cartProducts.js";

import {darkMode, brightMode} from "./app.js";


// The object Inventary contains an array of all the prodcuts
let inventary = new Inventary([]);
// Verifies if Inventary is in Session Storage
inventary['products'] = JSON.parse(sessionStorage.getItem('inventary')) ?? createInventary();


// Get the cart from session storage
let cart = new ShoppingCart([]);
// Verifies if Cart is in Session Storage
(sessionStorage.getItem('cart')) ? cart['products'] = JSON.parse(sessionStorage.getItem('cart')) : sessionStorage.setItem('cart', JSON.stringify(cart.products));


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
closeCartButton.onclick = () => cartOverlay.style.transform = "translateX(460px)";


// Functionality for product card buttons
productCardButtons();


// Button Add to Cart (In product page)
const addToCartButton = document.querySelector('.button-add-to-cart');

if (addToCartButton) {
    addToCartButton.onclick = () => {
        let elementId = addToCartButton.getAttribute('id');
        let productId = elementId.substring(19);

        let product = inventary.getProduct(productId);
        cart.addProduct(product);

        cartOverlay.style.transform = "translateX(0)";

        cartLoadData();

        sessionStorage.setItem('cart', JSON.stringify(cart.products));
    }
}


// Finish Buying
const finishBuyingButton = document.getElementById('finish-buying-button');
finishBuyingButton.onclick = () => {
    // Sweet Alert (Close desactivated)
    Swal.fire({
        title: 'PURCHASE COMPLETED',
        text: 'Thank you for your purchase! We wait for you again any time you want',
        showConfirmButton: false,
        timer: 3000,
        imageUrl: '../assets/images/icons/check-circle.svg',
        imageWidth: 100,
        allowOutsideClick: false
    });

    cartOverlay.style.transform = "translateX(460px)";  

    cart.checkout();
    cartLoadData();

    sessionStorage.setItem('cart', JSON.stringify(cart.products));

    // Redirects the user to home after the sweet alert modal closes
    setTimeout(() => location.replace("../../index.html"), 3200);
}



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

    const itemQuantityAlert = document.getElementById('cart-items-quantity');
    itemQuantityAlert.innerHTML = `${cart.productsAmount()}`;

    productCardButtons();
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

    const itemQuantityAlert = document.getElementById('cart-items-quantity');
    itemQuantityAlert.innerHTML = `${cart.productsAmount()}`;
}

// Function for product card buttons
function productCardButtons() {
    // Add Decrease product quantity buttons
    const subButton = document.querySelectorAll('#sub-button');
    const plusButton = document.querySelectorAll('#plus-button');

    subButton.forEach((element) => {
        element.onclick = (e) => {
            let product = e.target.parentNode;
            let elementId = product.getAttribute('id');
            let productId = elementId.substring(11);
            
            let prod = cart.getProduct(productId);
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

            if (cart.products.length == 0) cartOverlay.style.transform = "translateX(460px)";

            sessionStorage.setItem('cart', JSON.stringify(cart.products));
        }
    });

    plusButton.forEach((element) => {
        element.onclick = (e) => {
            let product = e.target.parentNode;
            let elementId = product.getAttribute('id');
            let productId = elementId.substring(11);
            
            let prod = cart.getProduct(productId);
            cart.addProduct(prod);

            const productAmount = e.target.previousSibling.previousSibling;
            productAmount.innerHTML = `${prod.cartQuantity}`;

            const productTotalPrice = e.target.parentNode.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.lastChild;
            productTotalPrice.innerHTML = `${prod.cartQuantity * prod.price}`;

            cartUpdateData();

            sessionStorage.setItem('cart', JSON.stringify(cart.products));
        }
    });


    // Delete product from cart
    const deleteProductButton = document.querySelectorAll('#delete-product');
    deleteProductButton.forEach((element) => {
        element.onclick = (e) => {
            let product = e.target;
            let elementClass = product.getAttribute('class');

            let productId = elementClass.substring(3);
        
            let prod = cart.getProduct(productId);
            prod.cartQuantity = 0;

            const productAmount = e.target.previousElementSibling.lastElementChild.firstElementChild.nextElementSibling;
            productAmount.innerHTML = `${prod.cartQuantity}`;

            const productTotalPrice = e.target.nextElementSibling.firstElementChild;
            productTotalPrice.innerHTML = `${prod.cartQuantity * prod.price}`;

            const productCard = e.target.parentNode;
            productCard.remove();
            cart.removeProduct(prod);

            cartUpdateData();

            if (cart.products.length == 0) cartOverlay.style.transform = "translateX(460px)";

            sessionStorage.setItem('cart', JSON.stringify(cart.products));
        }
    });
}