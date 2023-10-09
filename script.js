const $btnAgregar = document.getElementById("agregar");
const $btnVerCarrito = document.querySelector("#verCarrito");
const $btnEliminarCarrito = document.getElementById('eliminarCarrito');
const $btnVaciarCarrito = document.getElementById("vaciarCarrito");
const $btnComprar = document.getElementById("comprar");
const containerProds = document.getElementById("contenedor");
const carritoHTML =document.getElementById("carrito");
let carritoItems = [];

const crearTarjeta = (array) => {
    cardContainer.innerHTML = ''
    array.forEach(element => {
        let card =
            `<div class="card">
            <img src="${element.imagen}" class="card-img-top" alt="${element.nombre}">
            <div class="card-body ${element.categoria}">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">Precio: $ ${element.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>`
        cardContainer.innerHTML += card
    });

}

const usarJson = async function () {
    let response = await fetch('./js/data.json');
    let productos = await response.json();
    console.log(productos);
    crearTarjeta(productos);
}


btnMostrar.onclick = usarJson; 
