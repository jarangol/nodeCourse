const axios = require('axios');

const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ long }&appid=35033edc5bae430e28bc567c9d680056&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}