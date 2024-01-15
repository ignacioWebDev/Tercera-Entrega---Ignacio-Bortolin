


//Creacion de array de productos
const PRODUCTS = [
    {id: 1, name: 'Ala para diluir', price: 3500, description: "Ala para diluir de 250ml", image: "./assets/img/ala-diluir.jpeg"},
    {id: 2, name: 'Coca-Cola', price: 1500, description: "Coca-Cola clasica de 2.25l", image: "./assets/img/Coca-Cola.jpg"},
    {id: 3, name: 'Cif Blanco', price: 2000, description: "Cif blanco de 750gr(500ml)", image: "./assets/img/cif-blanco.jpg"},
    {id: 4, name: 'Bimbo Artesano', price: 1600, description: "Bimbo-artesano original de 500gr", image: "./assets/img/bimbo-artesano.jpg"},
    {id: 5, name: 'Cordones Jorgito', price: 500, description: "Cordones Negros Jorgito",image: "./assets/img/cordones-negros-jorgito.jpg"},
    {id: 6, name: 'Zuelo aceite', price: 2499, description: "Aceite oliva Zuelo clasico de 200ml", image: "./assets/img/zuelo-aceite-oliva.jpg"},
    {id: 7, name: 'Pilas Duracell', price: 1289, description: "Pilas Duracell AAA(Triple a)", image: "./assets/img/pilas-duracell.jpg"},
    {id: 8, name: 'Mayonesa Natura', price: 1760, description: "Mayonesa Natura de 250cm3", image: "./assets/img/mayonesa-natura.jpg"}
];

//Creacion de array del carrito
const CART = [];

//Funcion para mostrar los elementos de PRODUCTS
function renderProducts() {
    const ELEMENTCONTAINER = document.getElementById("productsContainer");
    ELEMENTCONTAINER.innerHTML = '';
    PRODUCTS.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
                        <img class="card-img" src="${product.image}">
                        <div class="div-text">
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <p>$${product.price}</p>
                            <button onclick="addToCart(${product.id})">Agregar al carrito</button>
                        </div>
                        `;
                        ELEMENTCONTAINER.appendChild(div);
                    });
                }

//Creando el sidebarConfig con configDiv
const configDiv = document.getElementById('sidebarConfig');

//Boton para abrir el panel de configuracion
let btnConfig = document.getElementById("btnConfig");
btnConfig.addEventListener("click", ()=>{
    showConfig()
    let cartTotal = 0;
    CART.forEach(product => {
        const productElement = createProductElement(product);
        configDiv.appendChild(productElement);
        cartTotal += product.price;
    });
    configDiv.innerHTML = `
                        <h2>Configuracion</h2>
                        <p>Nombre: ${localStorage.getItem("USERNAME")}</p>
                        <p>Apellido: ${localStorage.getItem("USERSURNAME")}</p>
                        <p>Se registro en: ${localStorage.getItem("USERREGISTERDATE")}</p>
                        <button onclick="hideConfig()">Ocultar</button>
                        `
})

//Funcion para ocultar el panel de configuracion
function hideConfig() {
    configDiv.classList.add('hidden')
}

//Funcion para mostrar el panel de la configuracion(sacar la clase hidden) 
function showConfig() {
    configDiv.classList.remove("hidden");
}

//Ejecuto la renderizacion de los productos
renderProducts();


// CART

//Funcion para vaciar carrito
function emptyCart() {
    if (CART.length <= 0) {
        alert("Para vaciar el carrito primero tienes que agregar productos al mismo");
    } else {
        CART.length = 0;
        alert("Carrito vaciado exitosamente!");
    }
}

//Funcion para comprar
function buyCart() {
    if (CART.length <= 0) {
        alert("Para comprar el carrito primero tienes que agregar productos al mismo");
    } else {
        CART.length = 0;
        alert("Compra exitosa, disfrute de sus productos!");
    }
}

//Creando el sidebarCart con cartDiv
let cartDiv = document.getElementById('sidebarCart');

//Funcion para ocultar el panel del carrito
function hideCart() {
    cartDiv.classList.add("hidden");
}

//Funcion para mostrar el panel del carrito(sacar la clase hidden) 
function showCart() {
    cartDiv.classList.remove("hidden");
}

//Funcion para agregar un producto al carrito
function addToCart(productId) {
    const selectedProduct = PRODUCTS.find(product => product.id === productId);
    if (selectedProduct) {
        CART.push(selectedProduct)
        reloadCart();
    }
} 


//Funcion para mostrar el nombre y el precio del producto agregado al carrito
function createProductElement(product) {
    const productParagraph = document.createElement('p');
    productParagraph.textContent = `${product.name}, $${product.price.toFixed(2)}`;
    return productParagraph;
}

//Funcion para cargar los productos al carrito
function reloadCart() {
    showCart();
    cartDiv.textContent = '';
    const cartTitle = document.createElement('h2');
    cartTitle.textContent = 'Carrito';
    cartDiv.appendChild(cartTitle);
    let cartTotal = 0;
    CART.forEach(product => {
        const productElement = createProductElement(product);
        cartDiv.appendChild(productElement);
        cartTotal += product.price;
    });
    
    const totalParagraph = document.createElement('p');
    totalParagraph.textContent = `Total: $${cartTotal.toFixed(2)}`;
    cartDiv.appendChild(totalParagraph);
    
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Comprar';
    buyButton.addEventListener('click', buyCart);
    cartDiv.appendChild(buyButton);

    const emptyButton = document.createElement('button');
    emptyButton.textContent = 'Vaciar carrito';
    emptyButton.addEventListener('click', emptyCart);
    cartDiv.appendChild(emptyButton);

    const hideButton = document.createElement('button');
    hideButton.textContent = 'Ocultar';
    hideButton.addEventListener('click', hideCart);
    cartDiv.appendChild(hideButton);
}

//Boton para abrir el panel de carrito
const BTNCART = document.getElementById("btnCart");
BTNCART.addEventListener("click", function () {
    reloadCart();
});