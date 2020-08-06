/*Obtenemos el numero a tratar mediante un prompt y se declaran variables 
para tratar el numero mediante parseo*/

var leftToRightStr = prompt("Capicua, ingrese el número a analizar:");
var leftToRightNum = parseInt(leftToRightStr);
var rightToLeftStr;
var rightToLeftNum;
var count = 1;

console.log("Entrada:");
console.log(leftToRightStr)

/*En este ciclo se invertira el numero recibido y se sumara al original para validar
que sea capicua las veces que sea necesario, se lleva un conteo mediante la variable count*/

while (true) {
    rightToLeftStr = invertir(leftToRightStr);
    rightToLeftNum = parseInt(rightToLeftStr);
    sumaNum = rightToLeftNum + leftToRightNum;
    sumaStr = sumaNum.toString();
    if (isCapicua(sumaStr)) { //Al encontrar el primer capicua sale del ciclo y termina el analisis
        console.log("Salida:");
        console.log(sumaNum + " " + count)
        break;
    } else { //En caso de no obtener capicua, incrementamos el conteo y asignamos el nuevo numero a analizar
        leftToRightStr = sumaStr;
        leftToRightNum = parseInt(sumaStr);
        count += 1;
    }
}

// Esta funcion invierte una cadena recibida y la retorna
function invertir(cadena) {
    var x = cadena.length;
    var cadenaInvertida = "";
    while (x >= 0) {
        cadenaInvertida = cadenaInvertida + cadena.charAt(x);
        x--;
    }
    return cadenaInvertida;
}

//Esta funcion invierte la cadena para compararla con la original y validar que sea capicua, devuelve un booleano
function isCapicua(cadena) {
    var cadenaInvertida = invertir(cadena);
    if (cadenaInvertida === cadena) {
        return true;
    } else {
        return false;
    }
}



