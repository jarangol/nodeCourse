function sumar(a, b) {
    return a + b;
}
console.log(sumar(20, 30));

let sumarFlecha = (a, b) => a + b;
console.log(sumarFlecha(20, 30));

function saludar() {
    return 'Hola mundo';
}
console.log(saludar());

let saludarFlecha = () => 'Hola Mundo';
console.log(saludarFlecha());

let saludarParam = nombre => `Hola ${nombre}`;
console.log(saludarParam("Julio"));