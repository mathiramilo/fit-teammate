// Object that represents the user

export default class User {
    // User has a name, lastname, age, gender, height & weight
    constructor(name, lastname, age, gender, height, weight) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }

    // Method that calculates and returns the user BMI
    calculateBMI() {
        return (this.weight / (Math.pow((this.height / 100), 2))).toFixed(1);
    }
}