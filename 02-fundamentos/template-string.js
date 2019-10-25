let nombre = 'Deadpool';
let real = 'Wade Winston'

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;

console.log(nombreCompleto);
console.log(nombreTemplate);
console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre de; ${ getNombre() }`);