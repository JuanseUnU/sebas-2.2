// COMENTARIO DE LINEA
/* COMENTARIO DE BLOQUE
SDLG
*/
// COMO SE INICIALIZA UN VECTOR
let vector = []; // vector vacio

let nombre = ["Carlos", "Juan", "Pepe", "Maria", "Luis", // vector con informacion 
     "Brayan", "Michel", "Kate", "Andres"];

console.log("Vector:" +nombre);// imprimir o escribir  todo el vector

// como imprimir un solo dato del vector

console.log("El nombre que esta en la posicion 1 es: " + nombre[1]);

// recorrer un vector
for(let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
}

//agregar mas informacion a un vector 
nombre.push("Stiven");

console.log(nombre);
for(let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
}

//para eliminar informacion 
nombre.splice(1, 2);

console.log(nombre);

console.log(nombre);
for(let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
}