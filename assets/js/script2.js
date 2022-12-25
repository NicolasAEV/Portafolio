import { carritos } from './object.js';

//variables
// const img = document.querySelector('.imagen-game');
// const nombre = document.querySelector('.producto');
// const descripcion = document.querySelector('.descripcion');
// const precio = document.querySelector('.precio');
const con = document.querySelector('.container-2');


for (let i = 0; i < carritos.length; i++) {

  //creamos un elemento padre
  const row = document.createElement('div')
  //establecemos la decendencia que vamos a insertar
  row.innerHTML = `<div class="cards">
    <img class="imagen-game" src="${carritos[i].imagen}"       alt="imagen del juego">
                       <h5 class="producto">${carritos[i].nombre}</h3>
                        <div class="info">
                          <p class="precio">precio: $${carritos[i].precio}</p>
                            <a class="buy" id="buy" value="${carritos[i].Id}" href="" >Comprar</a>
                        </div>
                        </div>   `;

  //add la decendencia
  con.appendChild(row);
  const btn1 = document.querySelectorAll('.buy');

  btn1.forEach((button) => {
    button.addEventListener('click', (e) => {
      alert(button)
      // button.href = './product.html';
    })
  });

}



// console.log(btn1)