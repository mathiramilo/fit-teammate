// Import Modules
import Inventary from "./classes/Inventary.js";

import createInventary from "./functions/createInventary.js";
import shopProducts from "./functions/shopProducts.js";

import {darkMode, brightMode} from "./app.js"


// The object Inventary contains an array of all the prodcuts
let inventary = new Inventary([]);
// Verifies if Inventary is in Session Storage
inventary['products'] = JSON.parse(sessionStorage.getItem('inventary')) || createInventary();

// LOAD THE SHOP

// Get the URL parameters
let params = new URLSearchParams(document.location.search);
let category = params.get('category'); // equipment | supplements

// Grid where products are shown
const productsGrid = document.getElementById('products');
// Filters Section
const filters = document.querySelector('.filters');
// Category Select
const categorySelect = document.getElementById('category');
// Order By
const orderBy = document.getElementById('order-by');

// Products shown in the shop grid
let productsShown = [];

// Show Equipment or Supplements
if (category == "equipment") {
    let equipment = inventary.equipment();
    let shopInnerHTML = shopProducts(equipment);

    productsShown = equipment;

    productsGrid.innerHTML = shopInnerHTML;

    filters.innerHTML = `
        <div class="search-subtitle">
            <input type="search" name="search" id="search" class="shop-search card-letters" placeholder="Search..." autocomplete="off">
            <h2 class="card-letters">Equipments</h2>
        </div>
        <div class="type-list">
            <button id="machines">Machines</button>
            <button id="dumbells">Dumbells</button>
            <button id="weights">Weights</button>
            <button id="bars">Bars</button>
            <button id="mats">Mats</button>
        </div>
        <div class="price-filter">
            <h2 class="card-letters">Price</h2>
            <input type="range" id="price-filter" name="price-filter" min="0" max="1000">
            <p>Max: US$ <span id="max-price-filter">1000</span></p>
        </div>`

    categorySelect.innerHTML = `
        <option value="equipment" selected>Equipment</option>
        <option value="supplements">Supplements</option>`

    let theme = sessionStorage.getItem('theme');
    if (theme == "bright") {
        brightMode();
    } else {
        darkMode();
    }

} else if (category == "supplements") {
    let supplements = inventary.supplements();
    let shopInnerHTML = shopProducts(supplements);

    productsShown = supplements;

    productsGrid.innerHTML = shopInnerHTML;

    filters.innerHTML = `
        <div class="search-subtitle">
            <input type="search" name="search" id="search" class="shop-search card-letters" placeholder="Search..." autocomplete="off">
            <h2 class="card-letters">Supplements</h2>
        </div>
        <div class="type-list">
            <button id="protein">Protein</button>
            <button id="creatine">Creatine</button>
            <button id="preworkout">Pre-Workout</button>
            <button id="bcaas">BCAAs</button>
            <button id="shakers">Shakers</button>
        </div>
        <div class="price-filter">
            <h2 class="card-letters">Price</h2>
            <input type="range" id="price-filter" name="price-filter" min="0" max="1000">
            <p>Max: US$ <span id="max-price-filter">1000</span></p>
        </div>`

    categorySelect.innerHTML = `
        <option value="equipment">Equipment</option>
        <option value="supplements" selected>Supplements</option>`

    let theme = sessionStorage.getItem('theme');
    if (theme == "bright") {
        brightMode();
    } else {
        darkMode();
    }

} else {
    location.replace("../../pages/shop-home.html");
}


// Category select event Listener
categorySelect.addEventListener('change', () => {
    let value = categorySelect.value;

    if (value == "equipment") {
        let equipment = inventary.equipment();
        let shopInnerHTML = shopProducts(equipment);

        productsShown = equipment;
    
        productsGrid.innerHTML = shopInnerHTML;
    
        filters.innerHTML = `
            <div class="search-subtitle">
                <input type="search" name="search" id="search" class="shop-search card-letters" placeholder="Search..." autocomplete="off">
                <h2 class="card-letters">Equipments</h2>
            </div>
            <div class="type-list">
                <button id="machines">Machines</button>
                <button id="dumbells">Dumbells</button>
                <button id="weights">Weights</button>
                <button id="bars">Bars</button>
                <button id="mats">Mats</button>
            </div>
            <div class="price-filter">
                <h2 class="card-letters">Price</h2>
                <input type="range" id="price-filter" name="price-filter" min="0" max="1000">
                <p>Max: US$ <span id="max-price-filter">1000</span></p>
            </div>`
    
        categorySelect.innerHTML = `
            <option value="equipment" selected>Equipment</option>
            <option value="supplements">Supplements</option>`

        addEventListenerTypes();
        searchInput();
        priceFilter();

        let theme = sessionStorage.getItem('theme');
        (theme == "bright") ? brightMode() : darkMode();
    
    } else if (value == "supplements") {
        let supplements = inventary.supplements();
        let shopInnerHTML = shopProducts(supplements);

        productsShown = supplements;
    
        productsGrid.innerHTML = shopInnerHTML;
    
        filters.innerHTML = `
            <div class="search-subtitle">
                <input type="search" name="search" id="search" class="shop-search card-letters" placeholder="Search..." autocomplete="off">
                <h2 class="card-letters">Supplements</h2>
            </div>
            <div class="type-list">
                <button id="protein">Protein</button>
                <button id="creatine">Creatine</button>
                <button id="preworkout">Pre-Workout</button>
                <button id="bcaas">BCAAs</button>
                <button id="shakers">Shakers</button>
            </div>
            <div class="price-filter">
                <h2 class="card-letters">Price</h2>
                <input type="range" id="price-filter" name="price-filter" min="0" max="1000">
                <p>Max: US$ <span id="max-price-filter">1000</span></p>
            </div>`
    
        categorySelect.innerHTML = `
            <option value="equipment">Equipment</option>
            <option value="supplements" selected>Supplements</option>`

        addEventListenerTypes();
        searchInput();
        priceFilter();

        let theme = sessionStorage.getItem('theme');
        (theme == "bright") ? brightMode() : darkMode();
    }
});

// Order By event Listener
orderBy.addEventListener('change', () => {
    let value = orderBy.value;

    if (value == "relevant") {
        // Order by Relevant
        productsShown.sort((a, b) => a.id - b.id);
        let shopInnerHTML = shopProducts(productsShown);

        productsGrid.innerHTML = shopInnerHTML;

        let theme = sessionStorage.getItem('theme');
        (theme == "bright") ? brightMode() : darkMode();
    } else if (value == "a-z") {
        // Order from a to z
        productsShown.sort((a, b) => (a.name < b.name) ? -1 : 1);
        let shopInnerHTML = shopProducts(productsShown);
        
        productsGrid.innerHTML = shopInnerHTML;

        let theme = sessionStorage.getItem('theme');
        (theme == "bright") ? brightMode() : darkMode();
    } else if (value == "z-a") {
        // Order from z to a
        productsShown.sort((a, b) => (a.name > b.name) ? -1 : 1);
        let shopInnerHTML = shopProducts(productsShown);

        productsGrid.innerHTML = shopInnerHTML;

        let theme = sessionStorage.getItem('theme');
        (theme == "bright") ? brightMode() : darkMode();
    } else if (value == "higher-price") {
        // Order from higher to lower price
        productsShown.sort((a, b) => b.price - a.price);
        let shopInnerHTML = shopProducts(productsShown);

        productsGrid.innerHTML = shopInnerHTML;

        let theme = sessionStorage.getItem('theme');
        (theme == "bright") ? brightMode() : darkMode();
    } else if (value == "lower-price") {
        // Order from lower to higher price
        productsShown.sort((a, b) => a.price - b.price);
        let shopInnerHTML = shopProducts(productsShown);

        productsGrid.innerHTML = shopInnerHTML;

        let theme = sessionStorage.getItem('theme');
        (theme == "bright") ? brightMode() : darkMode();
    }
});


// ------ SEARCH BY TYPE ------
addEventListenerTypes();

// ------ SEARCH BY NAME ------
searchInput();

// ------ SEARCH BY PRICE ------
priceFilter();

// Function that adds the event listeners for all types
function addEventListenerTypes() {
    // Get the type buttons
    const proteinButton = document.getElementById('protein');
    const creatineButton = document.getElementById('creatine');
    const preworkoutButton = document.getElementById('preworkout');
    const bcaasButton = document.getElementById('bcaas');
    const shakersButton = document.getElementById('shakers');

    const machinesButton = document.getElementById('machines');
    const dumbellsButton = document.getElementById('dumbells');
    const weightsButton = document.getElementById('weights');
    const barsButton = document.getElementById('bars');
    const matsButton = document.getElementById('mats');

    // Add events listeners
    if (!!proteinButton) proteinButton.addEventListener('click', () => filterByType("protein"));
    if (!!creatineButton) creatineButton.addEventListener('click', () => filterByType("creatine"));
    if (!!preworkoutButton) preworkoutButton.addEventListener('click', () => filterByType("preworkout"));
    if (!!bcaasButton) bcaasButton.addEventListener('click', () => filterByType("bcaas"));
    if (!!shakersButton) shakersButton.addEventListener('click', () => filterByType("shaker"));
    
    if (!!machinesButton) machinesButton.addEventListener('click', () => filterByType("machines"));
    if (!!dumbellsButton) dumbellsButton.addEventListener('click', () => filterByType("dumbells"));
    if (!!weightsButton) weightsButton.addEventListener('click', () => filterByType("weights"));
    if (!!barsButton) barsButton.addEventListener('click', () => filterByType("bars"));
    if (!!matsButton) matsButton.addEventListener('click', () => filterByType("mats"));
}

// Function that filters the products by type
function filterByType(type) {
    let filteredProducts = inventary.searchByType(type);
    let productsGridInnerHTML = shopProducts(filteredProducts);

    productsShown = filteredProducts;
    
    productsGrid.innerHTML = productsGridInnerHTML;

    let theme = sessionStorage.getItem('theme');
    (theme == "bright") ? brightMode() : darkMode();
}


// Function Search Input
function searchInput() {
    const searchBar = document.getElementById('search');
    searchBar.addEventListener('input', () => {
        let searchText = searchBar.value;
        let filteredProducts = inventary.searchByName(searchText);
        let productsGridInnerHTML = shopProducts(filteredProducts);
    
        productsShown = filteredProducts;
        
        productsGrid.innerHTML = productsGridInnerHTML;
    
        let theme = sessionStorage.getItem('theme');
        (theme == "bright") ? brightMode() : darkMode();
    });
}

// Function Price Filter
function priceFilter() {
    const priceRange = document.getElementById('price-filter');
    priceRange.addEventListener('input', () => {
        let maxPrice = priceRange.value;
        let filteredProducts = inventary.searchByMaxPrice(maxPrice);
        let productsGridInnerHTML = shopProducts(filteredProducts);

        productsShown = filteredProducts;
        
        productsGrid.innerHTML = productsGridInnerHTML;

        const maxPriceSpan = document.getElementById('max-price-filter');
        maxPriceSpan.innerText = maxPrice;

        let theme = sessionStorage.getItem('theme');
        (theme == "bright") ? brightMode() : darkMode();
    });
}