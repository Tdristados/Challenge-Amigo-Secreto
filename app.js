// El principal objetivo de este desafío es fortalecer 
// tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

console.log("Creamos la lista");
listaDeAmigos = [];

function limpiarCajaInput(){
    document.getElementById("amigo").value = "";
}

function agregarAmigo(){
    // Guardamos lo que se encuentre en ese instante en la caja de texto 'amigo'
    let amigo = document.getElementById("amigo").value; 
    if (amigo == ""){
        alert("Por favor ingrese un nombre")
    }
    else if (listaDeAmigos.includes(amigo)){
        alert("Este amigo ya se encuentra en la lista, ¡añade otro!")
    }
    else{
        // Lo añadimos a la lista de amigos
        listaDeAmigos.push(amigo);
        console.log(`Se añadió el nombre ${amigo} a la lista.`);
        
        // Limpiamos la caja de input
        limpiarCajaInput();
    }
}
