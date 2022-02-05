/* // Inicializando variables

let cards = [];
let nuevaCard;

//Aqui deben ir las variables recibidas desde los inputs
    let usuario = document.getElementById("inputNombre").value;;
    let fecha = document.getElementById("inputFecha").value;;
    let titulo = document.getElementById("inputTitulo").value;;
    let hastag = document.getElementById("inputHastag").value;

// Funcion constructora de objeto
function datosCard (usuario,fecha, titulo, hastag){
    this.nombreUsuario = usuario;
    this.fecha = fecha;
    this.titulo = titulo;
    this.hastag = hastag;
    this.likes = 0;
    this.comentarios = 0;
};


    //Se pasan las variables del scope local a la funcion constructora del objeto datosCard

    nuevaCard = new datosCard(usuario,fecha,titulo,hastag);



// se agrega la objeto al array cards

cards.push(nuevaCard);
console.log(cards); */

//Intento Dos
//let cards = [];

function capturarDatos() {

  // Funcion constructora de objeto
  function datosCard(usuario, fecha, titulo, hastag) {
    this.nombreUsuario = usuario;
    this.fecha = fecha;
    this.titulo = titulo;
    this.hastag = hastag;
    this.likes = 0;
    this.comentarios = 0;
  }
  //Aqui deben ir las variables recibidas desde los inputs
  let usuario = document.getElementById("inputNombre").value;;
  let fecha = document.getElementById("inputFecha").value;;
  let titulo = document.getElementById("inputTitulo").value;;
  let hastag = document.getElementById("inputHastag").value;

    //Se pasan las variables del scope local a la funcion constructora del objeto datosCard
    nuevaCard = new datosCard(usuario,fecha,titulo,hastag);
    console.log(nuevaCard);
    agregar();

    function agregar(){
        console.log("capturado");
        arregloCards.push(nuevaCard);
        console.log(arregloCards);
    }
   dibujarCard (nuevaCard);
}

//console.log("este es el arreglo de cards:" +arregloCards);