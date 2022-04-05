// Import Modules
import User from "./classes/User.js";


// 1. Get the user data from the storage or creates the object that represents the user
let user = new User("", "", "", "", "", "", "");

// 2. Get the necessary elements from the DOM
const initialDataSubmit = document.getElementById('initial-data-submit');

// 3. Validates the data entered by the user & Manage it, if user is at home
initialDataSubmit.addEventListener('click', initialDataValidation);

// FUNCTIONS

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
    if (name.trim() != "" && lastname.trim() != "" && age != "" && gender != "" && height != "" && weight != "") {
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

            showUserData();

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
function showUserData() {
    const userName = document.getElementById('user-name');
    const userAge = document.getElementById('user-age');
    const userHeight = document.getElementById('user-height');
    const userWeight = document.getElementById('user-weight');
    const userBmi = document.getElementById('user-bmi');
    const userBmiLevel = document.getElementById('bmi-level');

    const userGender = document.getElementById('user-gender');
    const bmiDescription = document.getElementById('bmi-description');
    const bmiRecomendationsList = document.getElementById('bmi-recomendations-list');

    const recomendedList = document.getElementById('recomended-list');

    userName.innerHTML = `${user.name} ${user.lastname}`;
    userAge.innerHTML = `${user.age}`;
    userHeight.innerHTML = `${user.height / 100} m`;
    userWeight.innerHTML = `${user.weight} kg`;
    userBmi.innerHTML = `${user.calculateBMI()}`;

    if (!!userGender) {
        userGender.innerHTML = `${user.gender}`
        if (user.gender == "Male") {
            userGender.style.color = "#1C9CD2";
        } else { // Gender Female
            userGender.style.color = "#eb3fb1";
        }
    }

    if (!!bmiDescription) {
        if (user.calculateBMI() < 18.5) {
            // Low
            bmiDescription.innerHTML = `Your weight is under normal levels given your height, you should gain weight.`;
        } else if (user.calculateBMI() < 25) {
            // Normal
            bmiDescription.innerHTML = `Your weight is within normal levels given your height congratulations.`;
        } else if (user.calculateBMI() < 30) {
            // High
            bmiDescription.innerHTML = `Your weight is above normal levels given your height, you should lose weight.`;
        } else {
            // Obesity
            bmiDescription.innerHTML = `Your weight is too above normal levels given your height, you must lose weight.`;
        }
    }

    if (!!bmiRecomendationsList) {
        if (user.calculateBMI() < 18.5) {
            // Low
            bmiRecomendationsList.innerHTML = `<p class="card-letters">1. Hypertrophy training at least 3 times per week</p><p class="card-letters">2. High calorie diet</p>`;
        } else if (user.calculateBMI() < 25) {
            // Normal
            bmiRecomendationsList.innerHTML = `<p class="card-letters">1. Remember to exercise at least 3 times a week</p><p class="card-letters">2. Try to maintain a healthy diet</p>`;
        } else if (user.calculateBMI() < 30) {
            // High
            bmiRecomendationsList.innerHTML = `<p class="card-letters">1. Exercise at least 3 times per week and include cardio or HIT training</p><p class="card-letters">2. Low calorie diet</p>`;
        } else {
            // Obesity
            bmiRecomendationsList.innerHTML = `<p class="card-letters">1. You must train at least 3 times a week, cardio and HIT training mandatory</p><p class="card-letters">2. Strict low calorie diet</p>`;
        }
    }

    if (user.calculateBMI() < 18.5) {
        // Low
        userBmi.style.color = "#EC9513";
        userBmiLevel.innerHTML = "Low";
        if (!!recomendedList) {
            recomendedList.innerHTML = "<p>1. Mass Gain Routine</p><p>2. High Calorie Diet</p>";
            const recomendedListItems = document.querySelectorAll('#recomended-list p');
            recomendedListItems.forEach(function(element) {
                element.style.color = "#EC9513";
            });
        }
    } else if (user.calculateBMI() < 25) {
        // Normal
        userBmi.style.color = "#4FD174";
        userBmiLevel.innerHTML = "Normal";
        if (!!recomendedList) {
            recomendedList.innerHTML = "<p>1. Standard Routine</p><p>2. Regular Diet</p>";
            const recomendedListItems = document.querySelectorAll('#recomended-list p');
            recomendedListItems.forEach(function(element) {
                element.style.color = "#4FD174";
            });
        }
    } else if (user.calculateBMI() < 30) {
        // High
        userBmi.style.color = "#EC9513";
        userBmiLevel.innerHTML = "High";
        if (!!recomendedList) {
            recomendedList.innerHTML = "<p>1. Burn Fat Routine</p><p>2. Low Calorie Diet</p>";
            const recomendedListItems = document.querySelectorAll('#recomended-list p');
            recomendedListItems.forEach(function(element) {
                element.style.color = "#EC9513";
            });
        }
    } else {
        // Obesity
        userBmi.style.color = "#EC1E11";
        userBmiLevel.innerHTML = "Obesity";
        if (!!recomendedList) {
            recomendedList.innerHTML = "<p>1. Burn Fat Routine</p><p>2. Strict Low Calorie Diet</p>";
            const recomendedListItems = document.querySelectorAll('#recomended-list p');
            recomendedListItems.forEach(function(element) {
                element.style.color = "#EC1E11";
            });
        }
    }
}


// Function that returns true if the string "str" only has letters, false otherwise
function onlyLetters(str) {
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(str)) {
        return true;
    } else {
        return false;
    }
}