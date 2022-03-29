// Object that represents a Shopping Cart

class ShoppingCart {
    // Shopping Cart has a list of Products
    constructor(products) {
        this.products = products;
    }

    // Method that adds a Product to the Shopping Cart
    addProduct(product) {
        this.products.push(product);
    }

    // Method that removes a Product from the Shopping Cart
    removeProduct(product) {
        for (let prod of this.products) {
            if (prod.id === product.id) {

            }
        }
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
    lenght() {
        let lenght = 0;
        for (let prod of this.products) {
            lenght++;
        }
        return lenght;
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