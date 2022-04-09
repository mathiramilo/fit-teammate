// Object that represents a Product

export default class Product {
    // Product has a unique id, name, price, type, description & dimensions
    constructor(id, name, price, type, description, dimensions, img, cartQuantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
        this.description = description;
        this.dimensions = dimensions;
        this.img = img;
        this.cartQuantity = cartQuantity;
    }
}