// Import Modules
import User from "./User.js";
import Product from "./Product.js";
import Inventary from "./Inventary.js";
import ShoppingCart from "./ShoppingCart.js";

// --- HOME ---

// 1. Create the object that represents the user
let user = new User("", "", "", "", "", "");

// 2. Get the necessary elements from the DOM
const initialDataSubmit = document.getElementById('initial-data-submit');

// 3. Validates the data entered by the user & Manage it, if user is at home
if (!!initialDataSubmit) initialDataSubmit.addEventListener('click', initialDataValidation);


// --- HAMBURGUER MENU ---

// Show the menu modal
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', showMenu);

// Close the menu modal
const xButton = document.querySelector('.x-button');
xButton.addEventListener('click', closeMenu);


// --- THEMES ---

// Initialize the variable theme as "bright"
let theme = "bright";

// Get the Dark Mode button
const darkModeButton = document.querySelector('.dark-mode');
darkModeButton.addEventListener('click', darkMode);

// Get the Bright Mode button
const brightModeButton = document.querySelector('.bright-mode');
brightModeButton.addEventListener('click', brightMode);



// --- FUNCTIONS ---


// --- Home ---

// Function that validates the initial data modal & asigns the data to the user
function initialDataValidation() {
    // Get all the input values
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    // Form Validation
    if (name != "" && lastname != "" && age != "" && gender != "" && height != "" && weight != "") {
        if (!onlyLetters(name) || !onlyLetters(lastname) || (age < 5 || age > 150) || (height < 50 || height > 250) || (weight < 10 || weight > 200)) {
            // Some input has an invalid value
            if (!onlyLetters(name)) {
                // Invalid Name
                const nameAlert = document.getElementById('name-alert');
                
                nameAlert.style.opacity = 1;
                nameAlert.style.pointerEvents = "all";
                nameAlert.style.animation = "alert 1s";

                // Resets the animation
                setTimeout(function() {
                    nameAlert.style.animation = "none";
                }, 1000);
            } else {
                const nameAlert = document.getElementById('name-alert');

                nameAlert.style.opacity = 0;
                nameAlert.style.pointerEvents = "none";
            }

            if (!onlyLetters(lastname)) {
                // Invalid Lastname
                const lastnameAlert = document.getElementById('lastname-alert');
                
                lastnameAlert.style.opacity = 1;
                lastnameAlert.style.pointerEvents = "all";
                lastnameAlert.style.animation = "alert 1s";

                // Resets the animation
                setTimeout(function() {
                    lastnameAlert.style.animation = "none";
                }, 1000);
            } else {
                const lastnameAlert = document.getElementById('lastname-alert');

                lastnameAlert.style.opacity = 0;
                lastnameAlert.style.pointerEvents = "none";
            }

            if (age < 5 || age > 150) {
                // Invalid Age
                const ageAlert = document.getElementById('age-alert');
                
                ageAlert.style.opacity = 1;
                ageAlert.style.pointerEvents = "all";
                ageAlert.style.animation = "alert 1s";

                // Resets the animation
                setTimeout(function() {
                    ageAlert.style.animation = "none";
                }, 1000);
            } else {
                const ageAlert = document.getElementById('age-alert');

                ageAlert.style.opacity = 0;
                ageAlert.style.pointerEvents = "none";
            }

            if (height < 50 || height > 250) {
                // Invalid Height
                const heightAlert = document.getElementById('height-alert');
                
                heightAlert.style.opacity = 1;
                heightAlert.style.pointerEvents = "all";
                heightAlert.style.animation = "alert 1s";

                // Resets the animation
                setTimeout(function() {
                    heightAlert.style.animation = "none";
                }, 1000);
            } else {
                const heightAlert = document.getElementById('height-alert');

                heightAlert.style.opacity = 0;
                heightAlert.style.pointerEvents = "none";
            }

            if (weight < 10 || weight > 200) {
                // Invalid Weight
                const weightAlert = document.getElementById('weight-alert');
                
                weightAlert.style.opacity = 1;
                weightAlert.style.pointerEvents = "all";
                weightAlert.style.animation = "alert 1s";

                // Resets the animation
                setTimeout(function() {
                    weightAlert.style.animation = "none";
                }, 1000);
            } else {
                const weightAlert = document.getElementById('weight-alert');

                weightAlert.style.opacity = 0;
                weightAlert.style.pointerEvents = "none";
            }
        } else {
            // Validation Completed
            user['name'] = name;
            user['lastname'] = lastname;
            user['age'] = age;
            user['gender'] = gender;
            user['height'] = height;
            user['weight'] = weight;

            showUserDataHome();

            // The modal disappears
            const initDataModalContainer = document.querySelector('.init-data-modal-container');

            initDataModalContainer.style.opacity = 0;
            initDataModalContainer.style.pointerEvents = "none";
        }
    } else {
        // Not all fields are complete
        const fillAllFields = document.getElementById('fill-all-fields');

        fillAllFields.style.color = "#e91010";
        fillAllFields.style.fontWeight = 500;
        fillAllFields.style.animation = "alert 1s";

        // Resets the animation
        setTimeout(function() {
            fillAllFields.style.animation = "none";
        }, 1000);
    }
}

// Function that prints in the home DOM the user data
function showUserDataHome() {
    const userName = document.getElementById('user-name');
    const userAge = document.getElementById('user-age');
    const userHeight = document.getElementById('user-height');
    const userWeight = document.getElementById('user-weight');
    const userBmi = document.getElementById('user-bmi');
    const userBmiLevel = document.getElementById('bmi-level');

    const recomendedList = document.getElementById('recomended-list');

    userName.innerHTML = `${user.name} ${user.lastname}`;
    userAge.innerHTML = `${user.age}`;
    userHeight.innerHTML = `${user.height / 100} m`;
    userWeight.innerHTML = `${user.weight} kg`;
    userBmi.innerHTML = `${user.calculateBMI()}`;

    if (user.calculateBMI() < 18.5) {
        // Low
        userBmi.style.color = "#EC9513";
        userBmiLevel.innerHTML = "Low";
        recomendedList.innerHTML = "<p>1. Mass Gain Routine</p><p>2. High Calorie Diet</p>";
        const recomendedListItems = document.querySelectorAll('#recomended-list p');
        recomendedListItems.forEach(function(element) {
            element.style.color = "#EC9513";
        });
    } else if (user.calculateBMI() < 25) {
        // Normal
        userBmi.style.color = "#4FD174";
        userBmiLevel.innerHTML = "Normal";
        recomendedList.innerHTML = "<p>1. Standard Routine</p><p>2. Regular Diet</p>";
        const recomendedListItems = document.querySelectorAll('#recomended-list p');
        recomendedListItems.forEach(function(element) {
            element.style.color = "#4FD174";
        });
    } else if (user.calculateBMI() < 30) {
        // High
        userBmi.style.color = "#EC9513";
        userBmiLevel.innerHTML = "High";
        recomendedList.innerHTML = "<p>1. Burn Fat Routine</p><p>2. Low Calorie Diet</p>";
        const recomendedListItems = document.querySelectorAll('#recomended-list p');
        recomendedListItems.forEach(function(element) {
            element.style.color = "#EC9513";
        });
    } else {
        // Obesity
        userBmi.style.color = "#EC1E11";
        userBmiLevel.innerHTML = "Obesity";
        recomendedList.innerHTML = "<p>1. Burn Fat Routine</p><p>2. Strict Low Calorie Diet</p>";
        const recomendedListItems = document.querySelectorAll('#recomended-list p');
        recomendedListItems.forEach(function(element) {
            element.style.color = "#EC1E11";
        });
    }
}


// --- Hamburguer Menu ---

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


// --- Themes ---

// Function Dark Mode
function darkMode() {
    theme = "dark";

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
        buttonATC.style.backgroundColor = "#FCFCFC";
        atcLetters.style.color = "#252525";
        prodCartIcon.style.fill = "#252525";
    }
}

// Function Bright Mode
function brightMode() {
    theme = "bright";

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
}


// --- Other ---

// Function that returns true if the string "str" only has letters, false otherwise
function onlyLetters(str) {
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(str)) {
        return true;
    } else {
        return false;
    }
}