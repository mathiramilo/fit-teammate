// Object that represents an Inventary

class Inventary {
    // Inventary has a list of all the products available
    constructor(products) {
        this.products = products;
    }

    // Method that adds a product to the Inventary
    addProduct(product) {
        if (!this.isProduct(product)) {
            this.products.push(product);
        }
    }

    // Method that checks if a product is in the Inventary
    isProduct(product) {
        for (let prod of this.products) {
            if (product.id === prod.id) {
                return true;
            }
        }
        return false;
    }
}