//objetos 8 productos
const carritos = [{
    Id : 1,
    cantidad : 1,
    nombre: 'Asassins Creed Valhalla',
    descripcion: 'Juego de rol y aventura en el mundo vikingo',
    precio: 20000,
    imagen: '/assets/img/valhalla.jpg'
}, {
    Id : 2,
    cantidad : 1,
    nombre: 'Gears Of War',
    descripcion: 'Nvidia 4090',
    precio: 1500,
    imagen: '/assets/img/gears.jpg'
}, {
    Id : 3,
    cantidad : 1,
    nombre: 'God of war',
    descripcion: 'Nvidia 4090',
    precio: 1300,
    imagen: '/assets/img/godofwar.jpg'
}, {
    Id : 4,
    cantidad : 1,
    nombre: 'Ghost Recon Breackpoint',
    descripcion: 'Nvidia 4090',
    precio: 1000,
    imagen: '/assets/img/ghost.jpg'
}, {
    Id : 5,
    cantidad : 1,
    nombre: 'Raimbow Six',
    descripcion: 'Nvidia 4090',
    precio: 800,
    imagen: '/assets/img/raimbow.jpg'
}, {
    Id : 6,
    cantidad : 1,
    nombre: 'Call of duty mw2',
    descripcion: 'Nvidia 4090',
    precio: 600,
    imagen: '/assets/img/codmw2.jpg.jpg'
}, {
    Id : 7,
    cantidad : 1,
    nombre: 'Elden Ring',
    descripcion: 'Nvidia 4090',
    precio: 450,
    imagen: '3050.jpg'
}, {
    Id : 8,
    cantidad : 1,
    nombre: 'Halo 5',
    descripcion: 'Nvidia 4090',
    precio: 400,
    imagen: '/assets/img/halo5.jpg'
}, {
    Id : 9,
    cantidad : 1,
    nombre: 'GTA: Grand teft auto V',
    descripcion: 'Nvidia 4090',
    precio: 400,
    imagen: '/assets/img/gtav.jpg'
}, {
    Id : 10,
    cantidad : 1,
    nombre: 'The Witcher III',
    descripcion: 'Nvidia 4090',
    precio: 400,
    imagen: 'witcher'
}]
//variables
const img = document.querySelector('.imagen-game');
const nombre = document.querySelector('.producto');
const descripcion = document.querySelector('.descripcion');
const precio = document.querySelector('.precio');
const con = document.querySelector('.container-2');
//listeners

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
                            <button class="buy" id="${carritos[i].id}">Comprar</button>
                        </div>
                        </div>   `;
    //add la decendencia
    con.appendChild(row);
}
