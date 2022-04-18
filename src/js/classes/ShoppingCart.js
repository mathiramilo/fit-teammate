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
        this.getProduct(product.id).cartQuantity = 0;

        let productIndex = this.products.indexOf(product);
        this.products.splice(productIndex, 1);
    }

    // Method that checks if a product is in the Shopping Cart
    isProduct(product) {
        let mapped = this.products.map(element => element.id);
        return mapped.includes(product.id);
    }

    // Method that returns the product with id = "id"
    getProduct(id) {
        return this.products.find(element => element.id == id);
    }

    // Method that returns the quantity of items in the Shopping Cart
    productsAmount() {
        let amount = 0;
        for (let prod of this.products) {
            amount += prod.cartQuantity;
        }
        return amount;
    }

    // Method that returns the subtotal cost of the Shopping Cart
    subtotal() {
        let subtotal = 0;
        for (let prod of this.products) {
            subtotal += prod.price * prod.cartQuantity;
        }
        return subtotal;
    }

    // Method that calculates the VAT of the Shopping Cart
    calculateVAT() {
        let subtotal = this.subtotal();
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
        return (this.subtotal() + this.calculateVAT() + this.shipping()).toFixed(2);
    }

    // Method for checkout
    checkout() {

    }
}