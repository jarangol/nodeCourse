const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).
argv;

const encodedUlr = encodeURI(argv.direccion);
console.log(encodedUlr);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
    headers: { 'X-RapidAPI-Key': 'GvohSTx7GDmshaRBfj9Un7Y9Au4tp1L6Ooejsn5mn2qIfXVDBg' }
});

instance.get()
    .then(response => console.log(response.data.Results[0]))
    .catch(err => console.log("ERROR", err));