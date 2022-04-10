// Function that recibes an array of products & returns the innerHTML to load in the shopping cart
export default function cartProducts(productList) {
    let cartInnerHTML = ``;

    productList.forEach(element => {
        cartInnerHTML += `
        <div class="cart-product-card">
                <div class="cpc-image">
                    <picture>
                        <source srcset="../assets/images/images/products/${element.img}.webp" type="image/webp">
                        <img src="../assets/images/images/products/${element.img}.png" alt="${element.name}">
                    </picture>
                </div> 

                <div class="cpc-data">
                    <h3 id="cpc-name">${element.name}</h3>
                    <p class="cpc-price">US$ <span id="product-price">${element.price}</span></p>
                    <div id="product-id-${element.id}" class="cpc-amount">
                        <button id="sub-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/></svg></button>
                        <span id="product-amount">${element.cartQuantity}</span>
                        <button id="plus-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg></button>
                    </div>
                </div>

                <button id="delete-product" class="pd-${element.id}"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg></button>

                <p class="total-product-price">US$ <span id="total-product-price">${element.price * element.cartQuantity}</span></p>
            </div>`
    });

    return cartInnerHTML;
}