// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

/*
  Agrega un nuevo amigo al array de amigos.
  Valida que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.
 */

function agregarAmigo() {
    let amigoIngresado = document.getElementById("amigo").value;
    console.log(amigoIngresado);
    console.log(amigoIngresado);
    if(amigoIngresado.trim() === "") {
        alert("Por favor, ingrese un nombre");
    }else{

        amigos.push(amigoIngresado);
        
    }
    document.querySelector("#amigo").value = "";
    mostrarListaAmigos(); 
}

function mostrarListaAmigos () {
    let listaAmigos = document.querySelector("#listaAmigos") ;  
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        const element = amigos[i];

        let lisatHtml = document.createElement("li");
        lisatHtml.textContent = element;
        listaAmigos.appendChild(lisatHtml);
    }    
}

/*
  Sortea y muestra un amigo de la lista de amigos de manera aleatoria.
  Verifica que la lista no esté vacía antes de realizar el sorteo.
 */

function sortearAmigo(){
    let contadorAmigos = amigos.length;
    if(contadorAmigos === 0){
        alert("Por favor ingrese al menos un amigo antes de sortear")
    }else {
        let indiceAmigo = Math.floor(Math.random() * contadorAmigos);
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = amigos[indiceAmigo];
      }
}