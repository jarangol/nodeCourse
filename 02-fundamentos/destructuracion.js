let deadpool = {
    nombre: 'James',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${ this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};


// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;
// console.log(nombre, apellido, poder);

let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);