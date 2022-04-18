// Import Modules
import Inventary from "./classes/Inventary.js";
import ShoppingCart from "./classes/ShoppingCart.js";

import {darkMode, brightMode} from "./app.js";


// Get the Inventary from Session storage
let inventary = new Inventary([]);

let sessionStorageInventaryString = sessionStorage.getItem('inventary');
let sessionStorageInventary = JSON.parse(sessionStorageInventaryString);
inventary['products'] = sessionStorageInventary;


// Get the URL parameters
let params = new URLSearchParams(document.location.search);
let productId = params.get('id');
let productType = params.get('type');

// Get the Product
const product = inventary.getProduct(productId);

// Redirect Shop
let category = "";
const equipment = ["machines", "dumbells", "weights", "bars", "mats"];
const supplements = ["protein", "creatine", "preworkout", "bcaas", "shaker"]; 

if (equipment.includes(productType)) {
    category = "equipment";
} else if (supplements.includes(productType)) {
    category = "supplements";
}

// Change Href attribute
const redirectShop = document.getElementById('redirect-shop');
redirectShop.setAttribute('href', `./shop.html?category=${category}`);


// Load the product data
const pathProdName = document.getElementById('path-product-name');
const prodImage = document.querySelector('.ppg-image');
const prodName = document.getElementById('product-name');
const prodPrice = document.getElementById('product-price-id');
const prodDescription = document.getElementById('product-description');
const prodDimensions = document.getElementById('product-dimensions');

pathProdName.innerText = `${product.name}`;
prodImage.innerHTML = `
    <picture>
        <source srcset="../assets/images/images/products/${product.img}.webp" type="image/webp">
        <img src="../assets/images/images/products/${product.img}.png" alt="${product.name}">
    </picture>`;
prodName.innerText = `${product.name}`;
prodPrice.innerText = `${product.price}`;
prodDescription.innerText = `${product.description}`;
prodDimensions.innerText = `${product.dimensions}`;

// Button add to cart
const addToCartButton = document.getElementById('button-add-to-cart');
addToCartButton.setAttribute('id', `button-add-to-cart-${productId}`);