/*Obtenemos la cadena a tratar mediante un prompt y se declaran variables 
para tratar la cadena mediante una expresion regular*/
var string = prompt("Analizador léxico, ingrese el texto a analizar:");
/*Esta expresion regular buscara dos numeros enteros separados por comas
que esten dentro de dos parentesis*/
var regex = /(\(\d+\,\d+\))+/gi; 
var search = [];
var coord = [];
var i = 0;

console.log("Entrada:")
console.log(string)
search = string.split(regex); //Se realiza un split con la regex para obtener un array con los datos separados
search.shift();
console.log("Salida:");

//Este ciclo une los dos elementos en el array que corresponden a coordenada y a cadena posterior
for (let index = 0; index < search.length; index++) {
    const element1 = search[index];
    const element2 = search[index+1];
    coord[i] = element1 + " " + element2;
    console.log(coord[i])
    index += 1;
    i += 1;
}