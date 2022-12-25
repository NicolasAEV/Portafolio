import { carritos } from './object.js';

//variables
// const img = document.querySelector('.imagen-game');
// const nombre = document.querySelector('.producto');
// const descripcion = document.querySelector('.descripcion');
// const precio = document.querySelector('.precio');
const con = document.querySelector('.container-2');

//muestra los primeros 5 elementos en la pagina principal
//creamos ciclo for para ver los primeros 5 elementos del array
for (let i = 0; i < 5; i++) {

    //creamos un elemento padre
    const row = document.createElement('div')
   //establecemos la decendencia que vamos a insertar
    row.innerHTML = `<div class="cards">
    <img class="imagen-game" src="${carritos[i].imagen}"       alt="imagen del juego">
                       <h5 class="producto">${carritos[i].nombre}</h3>
                        <div class="info">
                          <p class="precio">precio: $${carritos[i].precio}</p>
                            <button class="buy" id="${carritos[i].Id}">Comprar</button>
                        </div>
                        </div>   `;
    //add la decendencia
    con.appendChild(row);
}

