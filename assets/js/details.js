//imports
import { carritos } from "./object.js";
//variables
const urlParams = new URLSearchParams(location.search);
const id = urlParams.get("id");
const con = document.querySelector('.container-4')
// Ahora puedes utilizar el ID en el código de la otra página
//funcion find 
let juego = carritos.find((juego) => juego.id == id);


if(juego){

    const row = document.createElement('div')
    //establecemos la decendencia que vamos a insertar
    row.innerHTML = `<div class="row">
    <div class="col-12	col-sm-6 col-md-6	col-lg-6 col-xl-6 col-xxl-6">
      <img src="${juego.imagen}" alt="" width="100%" style=" border-radius: 10px;">
    </div>
    <div class="col-12	col-sm-6 col-md-6	col-lg-6 col-xl-6 col-xxl-6">
      <h1>${juego.nombre}</h1>
      <p>${juego.descripcion}</p>
      <p>precio: ${juego.precio}</p>
      <a class="buy" id="buy" data-id="${juego.id}" href="" >Comprar</a>
    </div>
  </div>`;
  
    //add la decendencia
    con.appendChild(row);
}else{
    const row = document.createElement('div')
    //establecemos la decendencia que vamos a insertar
    row.innerHTML = `
    <div class="card" style="width: 100%;">
   
      <h5 class="card-title text-center" ">disculpa no se encontro el juego</h5>
    
    </div>`;
  
    //add la decendencia
    con.appendChild(row);
}