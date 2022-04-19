// Object that represents an Inventary

export default class Inventary {
    // Inventary has a list of all the products available
    constructor(products) {
        this.products = products;
    }

    // Method that adds a product to the Inventary
    addProduct(product) {
        if (!this.isProduct(product)) this.products.push(product);
    }

    // Method that checks if a product is in the Inventary
    isProduct(product) {
        return this.products.includes(product);
    }

    // Method that returns the product with id = "id"
    getProduct(id) {
        return this.products.find(element => element.id == id);
    }

    // Method that returns an array with all the products of type equipment
    equipment() {
        let equipment = this.products.filter(prod => (prod.type == "machines" || prod.type == "dumbells" || prod.type == "weights" || prod.type == "bars" || prod.type == "mats"));
        return equipment;
    }

    // Method that returns an array with all the products of type supplement
    supplements() {
        let supplements = this.products.filter(prod => (prod.type == "protein" || prod.type == "creatine" || prod.type == "preworkout" || prod.type == "bcaas" || prod.type == "shaker"));
        return supplements;
    }

    // Method that returns an array with all the products of type "type"
    searchByType(type) {
        let productsByType = this.products.filter(prod => prod.type == type);
        return productsByType;
    }

    // Method that returns an array with all products whose price is less than a max price
    searchByMaxPrice(max) {
        let productsFBP = this.products.filter(prod => prod.price <= max);
        return productsFBP;
    }

    // Method that returns an array with the products that contains the string "str"
    searchByName(str) {
        let strLC = str.toLowerCase();

        let productsFilter = this.products.filter(prod => {
            let prodNameLC = prod.name.toLowerCase();
            return prodNameLC.includes(strLC);
        });

        return productsFilter;
    }
}