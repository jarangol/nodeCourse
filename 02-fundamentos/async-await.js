/**
 *  Async Await
 */

let getNombre = async() => {
    return 'Pedro';
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
};

saludo().then(mensaje => {
    console.log(mensaje);
});