// Function that recibes an array of products & returns the innerHTML to load in shop.html
export default function shopProducts(productList) {
    if (productList.length != 0) {
        let shopInnerHTML = ``;

        productList.forEach(element => {
            shopInnerHTML += `
            <a href="./product.html?id=${element.id}&type=${element.type}" class="product-card">
                <div class="image-div">
                    <picture>
                        <source srcset="../assets/images/images/products/${element.img}.webp" type="image/webp">
                        <img src="../assets/images/images/products/${element.img}.png" alt="${element.name}">
                    </picture>
                </div>
                <div class="name-price">
                    <h3 class="card-letters">${element.name}</h3>
                    <p>US$ ${element.price}</p>
                </div>
            </a>`
        });

        return shopInnerHTML;
    } else {
        // No Products to Show
        let noProductsHTML = `
        <div class="no-products-available">
            <svg id="no-products-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <p class="card-letters">There are no products that match your search.</p>
        </div>`

        return noProductsHTML;
    }
}