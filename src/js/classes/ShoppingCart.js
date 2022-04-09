// Object that represents a Shopping Cart

export default class ShoppingCart {
    // Shopping Cart has a list of Products (Product - Quantity)
    constructor(products) {
        this.products = products;
    }

    // Method that adds a Product to the Shopping Cart
    addProduct(product) {
        if (!this.isProduct(product)) {
            this.products.push(product);
        }
        this.getProduct(product.id).cartQuantity++;
    }

    // Method that removes a Product from the Shopping Cart
    removeProduct(product) {
        this.getProduct(product.id).cartQuantity--;

        let productIndex = this.products.indexOf(product);
        this.products.splice(productIndex, 1);
    }

    // Method that checks if a product is in the Shopping Cart
    isProduct(product) {
        return this.products.includes(product);
    }

    // Method that returns the product with id = "id"
    getProduct(id) {
        return this.products.find(element => element.id == id);
    }

    // Method that returns the quantity of a item in the Shopping Cart
    productQuantity(product) {
        let quantity = 0;
        for (let prod of this.products) {
            if (prod.id === product.id) {
                quantity++;
            }
        }
        return quantity;
    }

    // Method that returns the quantity of items in the Shopping Cart
    length() {
        let length = 0;
        for (let prod of this.products) {
            length++;
        }
        return length;
    }

    // Method that returns the subtotal cost of the Shopping Cart
    subtotal() {
        let subtotal = 0;
        for (let prod of this.products) {
            subtotal += prod.price;
        }
        return subtotal;
    }

    // Method that calculates the VAT of the Shopping Cart
    calculateVAT() {
        let subtotal = this.subtotalCost();
        let vat = parseFloat((subtotal * 0.12).toFixed(2));
        return vat;
    }

    // Method that calculates and returns the shipping cost
    shipping() {
        if (this.subtotal() > 1000) {
            return 0;
        } else {
            return 50;
        }
    }

    // Method that calculates and returns the total cost of the cart
    total() {
        return this.subtotal() + this.calculateVAT() + this.shipping();
    }

    // Method for checkout
    checkout() {

    }
}