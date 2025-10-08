//asi se declara una variable
var nombre = 'Santiago';
//asi se declara una constante
let edad = 22;
const PI = Math.PI;

let esMayorDeEdad = edad >= 18;

nombre = "Lydia";
edad = 29;
console.log('Hola ' + nombre);

function saludar(_nombre="Mundo") {
    alert("Hola " + _nombre);
}

saludar();
saludar(nombre);
saludar("Nadia");