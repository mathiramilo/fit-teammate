// Import Modules
import User from "./classes/User.js";

import {darkMode, brightMode} from "./app.js"


// Get User Data from Storage
let user = new User("", "", "", "", "", "", "");

if (sessionStorage.getItem('user')) {
    let ssUser = JSON.parse(sessionStorage.getItem('user'));

    for (let property in ssUser) {
        user[property] = ssUser[property];
    }
} 

showRoutineData();

// Routine Modal
const routineModal = document.getElementById('routine-modal');

if (user.tdw == "") {
    routineModal.style.opacity = 1;
    routineModal.style.pointerEvents = "all";
}

if (!!routineModal) {
    const changeTDW = document.getElementById('button-change-tdw');
    changeTDW.addEventListener('click', () => {
        routineModal.style.opacity = 1;
        routineModal.style.pointerEvents = "all";
    });

    const routineSubmit = document.getElementById('routine-submit');
    routineSubmit.addEventListener('click', routineDataValidation);
}

// FUNCTIONS

// Function that validates the routine data modal & asigns the data to the user
function routineDataValidation() {
    let tdw = document.getElementById('days').value;

    if (tdw != "") {
        if (parseInt(tdw) < 2 || parseInt(tdw) > 5) {
            // Invalid Training Days a Week
            const daysAlert = document.getElementById('days-alert');
                
            daysAlert.style.color = "#EC1E11";
            daysAlert.style.fontWeight = 600;
            daysAlert.style.animation = "alert 1s";

            // Resets the animation
            setTimeout(function() {
                daysAlert.style.animation = "none";
            }, 1000);
        } else {
            user['tdw'] = tdw;
            sessionStorage.setItem('user', JSON.stringify(user));

            showRoutineData();

            // The modal disappears
            const routineModal = document.getElementById('routine-modal');

            routineModal.style.opacity = 0;
            routineModal.style.pointerEvents = "none";
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
function showRoutineData() {
    const userGender = document.getElementById('user-gender');
    const userBmi = document.getElementById('user-bmi');
    const userTDW = document.getElementById('user-tdw');

    userGender.innerHTML = `${user.gender}`
    if (user.gender == "Male") {
        userGender.style.color = "#1C9CD2";
    } else { // Gender Female
        userGender.style.color = "#eb3fb1";
    }

    userTDW.innerHTML = `${user.tdw}`;

    userBmi.innerHTML = `${user.calculateBMI()}`;

    if (user.calculateBMI() < 18.5) {
        // Low
        userBmi.style.color = "#EC9513";
    } else if (user.calculateBMI() < 25) {
        // Normal
        userBmi.style.color = "#4FD174";
    } else if (user.calculateBMI() < 30) {
        // High
        userBmi.style.color = "#EC9513";
    } else {
        // Obesity
        userBmi.style.color = "#EC1E11";
    }

    // Custom Routine Grid
    const trainingPlanGrid = document.querySelector('.training-plan-grid');

    if (user.tdw == 2) {
        // 2 days a week
        trainingPlanGrid.innerHTML = 
        `<div class="training-day-card">
            <h3 class="card-letters">Day 1</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Full Body Routine</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>
        <div class="training-day-card">
            <h3 class="card-letters">Day 2</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Full Body Routine</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>`
    } else if (user.tdw == 3) {
        // 3 days a week
        trainingPlanGrid.innerHTML = 
        `<div class="training-day-card">
            <h3 class="card-letters">Day 1</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Chest & Triceps</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>
        <div class="training-day-card">
            <h3 class="card-letters">Day 2</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Back & Biceps</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>
        <div class="training-day-card">
            <h3 class="card-letters">Day 3</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Legs & Shoulders</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>`
    } else if (user.tdw == 4) {
        // 4 days a week
        trainingPlanGrid.innerHTML = 
        `<div class="training-day-card">
            <h3 class="card-letters">Day 1</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Strength Training</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>
        <div class="training-day-card">
            <h3 class="card-letters">Day 2</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Chest & Triceps</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>
        <div class="training-day-card">
            <h3 class="card-letters">Day 3</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Back & Biceps</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>
        <div class="training-day-card">
            <h3 class="card-letters">Day 4</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Legs & Shoulders</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>`
    } else {
        // 5 days a week
        trainingPlanGrid.innerHTML = 
        `<div class="training-day-card">
            <h3 class="card-letters">Day 1</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Strength Training</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>
        <div class="training-day-card">
            <h3 class="card-letters">Day 2</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Chest & Triceps</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>
        <div class="training-day-card">
            <h3 class="card-letters">Day 3</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Back & Biceps</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>
        <div class="training-day-card">
            <h3 class="card-letters">Day 4</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Endurance Training</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>
        <div class="training-day-card">
            <h3 class="card-letters">Day 5</h3>
            <div class="tdc-plan">
                <p class="card-letters">1. Legs & Shoulders</p>
                <p class="card-letters">2. Core & Abs 15 min</p>
                <p class="card-letters">3. Run 10 min</p>
            </div>
        </div>`
    }

    let theme = sessionStorage.getItem('theme');
    if (theme == "bright") {
        brightMode();
    } else {
        darkMode();
    }
}