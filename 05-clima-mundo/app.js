const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).
argv;

const getInfo = async(direccion) => {

    try {
        const lugarInfo = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(lugarInfo.lat, lugarInfo.lon);
        return `El clima de ${direccion} es de ${temp}.`
    } catch (err) {
        return `No se pudo determinar el clima para ${direccion}.`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)