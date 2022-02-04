
let id = 0; // s inicializa id para que en la funcion dibujarCard() vaya aumentando el id de card
let arregloCards = [];

// Se crear funcion que dibuja Card con JQuery
const dibujarCard = ()=>{
    console.log("Dibuja card activada");
    $(document).ready(function () {
        $("#contendorCards").append( //Agregar a div General
         $("<section/>").attr("class", "card card-post p-3 mt-3").attr("id", `tarjeta${id++}`).append(
            $("<div/>").attr("class", "devcard-header d-flex align-items-start justify-content-between").append(
                $("<div/>").attr("class", "card-user d-flex ps-3 align-items-center").append(
                    $("<img/>").attr("src", "assets/user-dev.webp").attr("alt", "Usuario Imagen").attr("width","32").attr("class","me-2 rounded-circle"),
                    $("<div/>").attr("class","user-name d-flex flex-column").append(
                        $("<p/>").attr("class","mb-0").text('Ben Halpern ').append(
                            $("<span/>").text("for "),
                            $("<span/>").text("The DEV Team")),
                        $("<p/>").attr("class","user-date text-secondary mb-0").text('Dec3')
                    ),
                    ),
                $("<div/>").attr("class", "devcard-pin d-flex align-items-center pe-3").append(
                    $("<svg/>").attr("xmlns","http://www.w3.org/2000/svg").attr("viewbox","0 0 24 24").attr("width","24").attr("heigth", "24").attr("aria-hidden","true").attr("class","mr-1 align-text-bottom color-accent-brand me-2").attr("fill","#3b49df").append(
                    $("<path/>").attr("d","M22.314 10.172l-1.415 1.414-.707-.707-4.242 4.242-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.242 1.414-1.415L8.88 8.05l4.242-4.242-.707-.707 1.414-1.415z")),
                    $("<span/>").attr("class","text-secondary").text("Pinned")
                    )    
          ),
            $("<div/>").attr("class","devcard-main p-3").append(
                $("<a/>").attr("href","pages/post.html").attr("class","text-decoration-none").append(
                    $("<h2/>").attr("class","text-black link-purple fw-bold").text("Last Chance to Join the 2021 GitHub Actions Hackathon on DEV!")
                ),
                $("<div/>").attr("class","devcard-tags mb-2").append(
                    $("<span/>").text("#meta "),
                    $("<span/>").text("#actionshackathon21"),
                )
            ),
            $("<div/>").attr("class", "devcard-footer bg-white d-flex justify-content-between align-items-center ps-3").append(
                $("<div/>").attr("class","d-flex").append(
                    $("<div/>").attr("class","devcard-likes me-3").append(
                        $("<img/>").attr("src","assets/svg/icon-heart.svg").attr("alt","Likes icon"),
                        $("<spn/>").text("87 reactions")
                    ),
                    $("<div/>").attr("class","devcard-comments").append(
                        $("<img/>").attr("src","assets/svg/iccon-comment.svg").attr("alt","Comment icon"),
                        $("<spn/>").text("14 comments")
                    )
                ),
                $("<div/>").attr("class","card-read d-flex align-items-center pe-3").append(
                    $("<span/>").attr("class","me-2 text-secondary").text("2 min read"),
                    $("<button/>").attr("class","btn btn-secondary text-light").text("Save")
                )
            )
          )
        );
    }
 )
 arregloCards.push(`tarjeta${id++}`);
};


//Funcion Borrar card
//Hay error porque borra todas las cards

function borrarCard() {
  console.log("funcion borrar Actividada");
    while (contendorCards.hasChildNodes()) {
        contendorCards.removeChild(contendorCards.lastChild);
    } 
  }
