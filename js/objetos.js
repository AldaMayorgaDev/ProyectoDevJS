// Se inicializan varibles en scope Global
let nuevaCard;
let arregloCards = [];

/* Se crear función capturarDatos() que obtiene los datos del formulario modal,
   crea el objet nuevaCard{}
   lo almacena en un array llamdo arregloCards[]
 */

function capturarDatos() {

  // Funcion constructora de objeto
  function Card(usuario, fecha, titulo, hastag,contenidoPost) {
    this.nombreUsuario = usuario;
    this.fecha = fecha;
    this.titulo = titulo;
    this.contenidoPost = contenidoPost;
    this.hastag = hastag;
    this.likes = 0;
    this.comentarios = 0;
  }
  //Aqui deben ir las variables recibidas desde los inputs
  let usuario = document.getElementById("inputNombre").value;
  let fecha = document.getElementById("inputFecha").value;
  let titulo = document.getElementById("inputTitulo").value;
  let hastag = document.getElementById("inputHastag").value;
  let contenidoPost = document.getElementById("inputTextArea").value;

  //Se pasan las variables del scope local a la funcion constructora del objeto datosCard
    nuevaCard = new Card(usuario,fecha,titulo,hastag,contenidoPost);
    console.log(nuevaCard);
    agregar();

    //Funcion agregar(), agrega el objeto al arreglo
    function agregar(){
        console.log("capturado");
        arregloCards.push(nuevaCard);
        console.log(arregloCards);
    }

    //Se manda llamar la funcion dibujarCard() para que se cren los elementos ocupando jquery
    dibujarCard();
}
