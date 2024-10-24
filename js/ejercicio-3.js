/*Escribe un programa que recorra un vector de animale y 
que muestrre solo los que tengan mas de 5 letras en su nombre */

let animales = ["Leon", "Tortuga", "Perro", "Gato", "Aguila"];
let i = 0
for(let i = 0; i < animales.length; i++) {

    if(animales[i].length > 5) {
        console.log(animales[i]);
    }
}