// HAMBURGUER MENU

// Show the menu modal
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', showMenu);

// Close the menu modal
const xButton = document.querySelector('.x-button');
xButton.addEventListener('click', closeMenu);


// THEMES

// Initialize the variable theme from session storage or as "bright" default
let theme = sessionStorage.getItem('theme') || "bright";

// Charge the page with the theme
(theme == "bright") ? brightMode() : darkMode();

// Get the Dark Mode button
const darkModeButton = document.querySelector('.dark-mode');
darkModeButton.addEventListener('click', darkMode);

// Get the Bright Mode button
const brightModeButton = document.querySelector('.bright-mode');
brightModeButton.addEventListener('click', brightMode);


// FUNCTIONS


// Hamburguer Menu

// Function thats show the menu modal
function showMenu() {
    const navbarModal = document.querySelector('.navbar-modal');
    navbarModal.style.opacity = 1;
    navbarModal.style.pointerEvents = "all";

    const linksModal = document.querySelectorAll('.navbar-link-modal');
    linksModal.forEach(function(element) {
        element.style.display = "block";
    });
}

// Function that closes the menu modal
function closeMenu() {
    const navbarModal = document.querySelector('.navbar-modal');
    navbarModal.style.opacity = 0;
    navbarModal.style.pointerEvents = "none";
}


// Themes

// Function Dark Mode
export function darkMode() {
    let newTheme = "dark";
    sessionStorage.setItem('theme', newTheme);

    document.body.style.backgroundColor = "#030303";

    const darkModeSvg = document.getElementById('dark-mode-svg');
    const brightModeSvg = document.getElementById('bright-mode-svg');

    darkModeSvg.style.fill = "#262461";
    brightModeSvg.style.fill = "#363636";

    const themes = document.querySelector('.themes');
    themes.style.backgroundColor = "#101010";

    const navbarLinks = document.querySelectorAll('.navbar-link');
    navbarLinks.forEach(function(element) {
        element.style.color = "#F8F8F8";
    });

    const logoText = document.getElementById('logo-text');
    logoText.style.color = "#F8F8F8";

    if (!!document.querySelectorAll('.secondary-card')) {
        const secondaryCards = document.querySelectorAll('.secondary-card');
        secondaryCards.forEach(function(element) {
            element.style.backgroundColor = "#121212";
        });
    }
    
    const cardLetters = document.querySelectorAll('.card-letters');
    cardLetters.forEach(function(element) {
        element.style.color = "#eeeeee";
    });

    if (!!document.querySelector('.routine-button') && !!document.querySelector('.shop-button')) {
        const routineButton = document.querySelector('.routine-button');
        const shopButton = document.querySelector('.shop-button');
        routineButton.style.backgroundColor = "#EEEEEE";
        routineButton.style.color = "#0B0B0B";
        shopButton.style.backgroundColor = "#EEEEEE";
        shopButton.style.color = "#0B0B0B";
    }

    if (!!document.querySelector('#recomended-list')) {
        const recomendedList = document.querySelector('#recomended-list');
        recomendedList.classList.add('recomended-list-darkmode');
    }
    
    if (!!document.querySelectorAll('.shop-card-option')) {
        const shopCardOption = document.querySelectorAll('.shop-card-option');
        shopCardOption.forEach(function(element) {
            element.classList.add('shop-card-option-darkmode');
        });
    }
    
    if (!!document.getElementById('routine-card-hr')) {
        const routineHr = document.getElementById('routine-card-hr');
        routineHr.style.backgroundColor = "#3F3F3F";
    }
    
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.style.fill = "#ffffff";

    // MY DATA

    if (!!document.querySelector('.my-data-hr')) {
        const myDataHr = document.querySelector('.my-data-hr');
        myDataHr.style.backgroundColor = "#2D2D2D";
    }

    if (!!document.querySelector('.my-data')) {
        const myData = document.querySelector('.my-data');
        myData.style.borderColor = "#666666";
    }

    // ROUTINE

    if (!!document.querySelectorAll('.training-day-card')) {
        const trainingDayCards = document.querySelectorAll('.training-day-card');
        trainingDayCards.forEach(function(element) {
            element.style.backgroundColor = "#111111";
        });
    }

    if (!!document.querySelector('.routine-my-data')) {
        const routineMyData = document.querySelector('.routine-my-data');
        routineMyData.style.borderColor = "#1d1d1d";
    }

    // SHOP-HOME

    const productChooseCards = document.querySelectorAll('.product-choose-card');
    productChooseCards.forEach(function(element) {
        element.classList.add('product-choose-card-darkmode');
    });

    // SHOP

    const imageDivs = document.querySelectorAll('.image-div');
    imageDivs.forEach(function(element) {
        element.style.backgroundColor = "#0D0D0D";
    });

    const shopSelects = document.querySelectorAll('.shop-select');
    shopSelects.forEach(function(element) {
        element.style.backgroundColor = "#1B1B1B";
        element.style.borderColor = "#262626";
    });

    if (!!document.querySelector('.shop-search')) {
        const shopSearch = document.querySelector('.shop-search');
        shopSearch.style.backgroundColor = "#1B1B1B";
        shopSearch.style.borderColor = "#393939";
    }

    if (!!document.querySelector('.shopping-cart-button')) {
        const shoppingCartButton = document.querySelector('.shopping-cart-button');
        const cartIcon = document.querySelector('.cart-icon');
        shoppingCartButton.style.backgroundColor = "#1B1B1B";
        cartIcon.style.fill = "#A9A9A9";
    }

    // PRODUCT

    if (!!document.querySelector('.product-hr')) {
        const prodHr = document.querySelector('.product-hr');
        prodHr.style.backgroundColor = "#3C3C3C";
    }

    if (!!document.querySelector('.button-add-to-cart')) {
        const buttonATC = document.querySelector('.button-add-to-cart');
        const atcLetters = document.querySelector('.atc-letters'); 
        const prodCartIcon = document.querySelector('.prod-cart-icon');
        buttonATC.style.backgroundColor = "#262626";
        atcLetters.style.color = "#F4F4F4";
        prodCartIcon.style.fill = "#F4F4F4";
    }

    if (!!document.getElementById('no-products-icon')) {
        const noProductsIcon = document.getElementById('no-products-icon');
        noProductsIcon.style.fill = "#FFFFFF";
    }
}

// Function Bright Mode
export function brightMode() {
    let newTheme = "bright";
    sessionStorage.setItem('theme', newTheme);

    document.body.style.backgroundColor = "#FFFFFF";

    const darkModeSvg = document.getElementById('dark-mode-svg');
    const brightModeSvg = document.getElementById('bright-mode-svg');

    darkModeSvg.style.fill = "#DCDCDC";
    brightModeSvg.style.fill = "#262461";

    const themes = document.querySelector('.themes');
    themes.style.backgroundColor = "#F9F9F9";

    const navbarLinks = document.querySelectorAll('.navbar-link');
    navbarLinks.forEach(function(element) {
        element.style.color = "#161616";
    });

    const navbarLinksFooter = document.querySelectorAll('.footer-navbar-link');
    navbarLinksFooter.forEach(function(element) {
        element.style.color = "#F8F8F8";
    });

    const navbarLinksModal = document.querySelectorAll('.navbar-link-modal');
    navbarLinksModal.forEach(function(element) {
        element.style.color = "#F8F8F8";
    });

    const logoText = document.getElementById('logo-text');
    logoText.style.color = "#161616";

    const secondaryCards = document.querySelectorAll('.secondary-card');
    secondaryCards.forEach(function(element) {
        element.style.backgroundColor = "#FEFEFE";
    });

    const cardLetters = document.querySelectorAll('.card-letters');
    cardLetters.forEach(function(element) {
        element.style.color = "#161616";
    });

    if (!!document.querySelector('.routine-button') && !!document.querySelector('.shop-button')) {
        const routineButton = document.querySelector('.routine-button');
        const shopButton = document.querySelector('.shop-button');
        routineButton.style.backgroundColor = "#161616";
        routineButton.style.color = "#FFFFFF";
        shopButton.style.backgroundColor = "#161616";
        shopButton.style.color = "#FFFFFF";
    }
    
    if (!!document.querySelector('#recomended-list')) {
        const recomendedList = document.querySelector('#recomended-list');
        recomendedList.classList.remove('recomended-list-darkmode');
    }
    
    const shopCardOption = document.querySelectorAll('.shop-card-option');
    shopCardOption.forEach(function(element) {
        element.classList.remove('shop-card-option-darkmode');
    });

    if (!!document.getElementById('routine-card-hr')) {
        const routineHr = document.getElementById('routine-card-hr');
        routineHr.style.backgroundColor = "#CDCDCD";
    }
    
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.style.fill = "#0A0A0A";

    // MY DATA

    if (!!document.querySelector('.my-data-hr')) {
        const myDataHr = document.querySelector('.my-data-hr');
        myDataHr.style.backgroundColor = "#e6e6e6";
    }

    if (!!document.querySelector('.my-data')) {
        const myData = document.querySelector('.my-data');
        myData.style.borderColor = "#e6e6e6";
    }

    // ROUTINE

    if (!!document.querySelectorAll('.training-day-card')) {
        const trainingDayCards = document.querySelectorAll('.training-day-card');
        trainingDayCards.forEach(function(element) {
            element.style.backgroundColor = "#FBFBFB";
        });
    }

    if (!!document.querySelector('.routine-my-data')) {
        const routineMyData = document.querySelector('.routine-my-data');
        routineMyData.style.borderColor = "#d1d1d1";
    }

    // SHOP HOME

    const productChooseCards = document.querySelectorAll('.product-choose-card');
    productChooseCards.forEach(function(element) {
        element.classList.remove('product-choose-card-darkmode');
    });

    // SHOP

    const imageDivs = document.querySelectorAll('.image-div');
    imageDivs.forEach(function(element) {
        element.style.backgroundColor = "#F4F4F4";
    });

    const shopSelects = document.querySelectorAll('.shop-select');
    shopSelects.forEach(function(element) {
        element.style.backgroundColor = "#F4F4F4";
        element.style.borderColor = "#DDDDDD";
    });

    if (!!document.querySelector('.shop-search')) {
        const shopSearch = document.querySelector('.shop-search');
        shopSearch.style.backgroundColor = "#F4F4F4";
        shopSearch.style.borderColor = "#DDDDDD";
    }

    if (!!document.querySelector('.shopping-cart-button')) {
        const shoppingCartButton = document.querySelector('.shopping-cart-button');
        const cartIcon = document.querySelector('.cart-icon');
        shoppingCartButton.style.backgroundColor = "#F9F9F9";
        cartIcon.style.fill = "#363636";
    }

    // PRODUCT

    if (!!document.querySelector('.product-hr')) {
        const prodHr = document.querySelector('.product-hr');
        prodHr.style.backgroundColor = "#e4e4e4";
    }

    if (!!document.querySelector('.button-add-to-cart')) {
        const buttonATC = document.querySelector('.button-add-to-cart');
        const atcLetters = document.querySelector('.atc-letters'); 
        const prodCartIcon = document.querySelector('.prod-cart-icon');
        buttonATC.style.backgroundColor = "#161616";
        atcLetters.style.color = "#FFFFFF";
        prodCartIcon.style.fill = "#FFFFFF";
    }

    if (!!document.getElementById('no-products-icon')) {
        const noProductsIcon = document.getElementById('no-products-icon');
        noProductsIcon.style.fill = "#161616";
    }
}