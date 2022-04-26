// Import Modules
import Product from "../classes/Product.js";
import Inventary from "../classes/Inventary.js";


// Creates a new Inventary with all the products & Returns an array with all the Products
export default function createInventary() {
    // Create the inventary & store it in Local Storage
    let newInventary = new Inventary([]);

    // Create all the products...

    // Use fetch API to fetch the data from the json file "products.json"
    let request = new Request(".././src/js/json/products.json");

    fetch(request)
        .then((response) => response.json())
        .then((data) => {
            // Iterate through data (array that contains all the products as objects) and add all products to the inventary
            for (let item of data) {
                // We apply destructuring in order to get the product properties
                let {id, name, price, type, description, dimensions, img, cartQuantity} = item;
                // Create the product
                const product = new Product(id, name, price, type, description, dimensions, img, cartQuantity);
                // Add to inventary
                newInventary.addProduct(product);
            }

            // Add inventary to Session Storage
            sessionStorage.setItem('inventary', JSON.stringify(newInventary.products));
            
            // Return an array with all the products to be shown in the shop
            return newInventary.products;
        });
}