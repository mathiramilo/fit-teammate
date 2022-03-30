// Object that represents a Product

export default class Product {
    // Product has a unique id, name, price, description & dimensions
    constructor(id, name, price, description, dimensions) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.dimensions = dimensions;
    }
}