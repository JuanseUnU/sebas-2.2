/* crear un vector vacio llamado "colores"
luego agrega 3 colores diferentes y recorrer el vector */


let colores = []; // vector vacio

colores.push("Amarillo", "Azul", "Verde"); // se agregan 3 colores 

console.log("vector:"+ colores); // se imprime los colores 

for(let i = 0; i < colores.length; i ++) { //recorre el vector 
    console.log(colores[i]);
}