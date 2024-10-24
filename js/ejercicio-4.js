// Crea un vector con los  números del 1 al 10, usa un ciclo  para
//sumar  todos los números en el vector y mostar el resultado 

let numeros = [1,2,3,4,5,6,7,8,9,10];
let suma = 0;
for(let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

console.log("La suma es;",suma)