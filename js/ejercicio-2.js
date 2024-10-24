/*crea un vector con los numeros del 1 al 5, 
luego elimina el numeor que esta en la posicion 2 y recorre el vector */

let numeros = [1,2,3,4,5];

numeros.splice(2, 1);

for(let i = 0; i < numeros.length; i ++){
    console.log(numeros[i]);
}
