const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'X-RapidAPI-Key': 'GvohSTx7GDmshaRBfj9Un7Y9Au4tp1L6Ooejsn5mn2qIfXVDBg' }
    });

    const resp = await instance.get();

    if (resp.data.Results[0].length === 0) {
        throw new Error(`No se encontraron resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }
}


module.exports = {
    getLugarLatLng
}