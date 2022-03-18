// INITIAL DATA MODAL

// 1. Get the necessary elements from the DOM
const initialDataSubmit = document.getElementById('initial-data-submit');

// 2. Create the object that represents the user
let user = {
    name: "",
    lastname: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    bmi: ""
};

// 3. Validates the data entered by the user & Manage it
initialDataSubmit.addEventListener('click', () => {
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
            user['bmi'] = bmiCalculator(weight, height);

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
});

// Function that returns true if the string "str" only has letters, false otherwise
function onlyLetters(str) {
    let regex = /^[a-zA-Z]+$/;
    if (regex.test(str)) {
        return true;
    } else {
        return false;
    }
}

// Function that calculates the bmi of a person given his height & weight
function bmiCalculator(weight, height) {
    return (weight / (Math.pow((height / 100), 2))).toFixed(1);
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
    userBmi.innerHTML = `${user.bmi}`;

    if (user.bmi < 18.5) {
        // Low
        userBmi.style.color = "#EC9513";
        userBmiLevel.innerHTML = "Low";
        recomendedList.innerHTML = "<p>1. Mass Gain Routine</p><p>2. High Calorie Diet</p>";
        const recomendedListItems = document.querySelectorAll('#recomended-list p');
        recomendedListItems.forEach(function(element) {
            element.style.color = "#EC9513";
        });
    } else if (user.bmi < 25) {
        // Normal
        userBmi.style.color = "#4FD174";
        userBmiLevel.innerHTML = "Normal";
        recomendedList.innerHTML = "<p>1. Standard Routine</p><p>2. Regular Diet</p>";
        const recomendedListItems = document.querySelectorAll('#recomended-list p');
        recomendedListItems.forEach(function(element) {
            element.style.color = "#4FD174";
        });
    } else if (user.bmi < 30) {
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