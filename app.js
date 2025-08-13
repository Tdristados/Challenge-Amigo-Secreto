// El principal objetivo de este desafío es fortalecer 
// tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

console.log("Creamos la lista");
amigos = [];

function limpiarCajaInput(){
    document.getElementById("amigo").value = "";
}

function agregarAmigo(){
    // Guardamos lo que se encuentre en ese instante en la caja de texto 'amigo'
    let amigo = document.getElementById("amigo").value; 
    if (amigo == ""){
        alert("Por favor ingrese un nombre")
    }
    else if (amigos.includes(amigo)){
        alert("Este amigo ya se encuentra en la lista, ¡añade otro!")
    }
    else{
        // Lo añadimos a la lista de amigos
        amigos.push(amigo);
        console.log(`Se añadió el nombre ${amigo} a la lista.`);
        
        // Limpiamos la caja de input
        limpiarCajaInput();
        actualizarLista();
    }
    return;
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i<amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
    return;
}

function sortearAmigo(){
    // Si no hay elemtnos, que suelte una alert.
    if (amigos.length <= 0){
        alert("Por favor ingrese nombres para tener amigos para seleccionar!");
        return;
    }
    let indice = parseInt(Math.random()*amigos.length);
    console.log(indice);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let amigoElegido = document.createElement("li");
    amigoElegido.textContent = amigos[indice];
    resultado.appendChild(amigoElegido);
    return;
}