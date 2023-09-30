const rp = require('request-promise')

module.exports = async function(city) {
    if (!city) {
        throw new Error(`City's not entered!`)
    }

    const key = 'a0463513969149d1af9175213232807'
    const uri = 'http://api.weatherapi.com/v1/current.json'

    const options = {
        uri,
        qs: {
            key,
            q: city,
            lang: 'ru'
        },
        json: true
    }

    try {
        const responseData = await rp(options)

        return {
            weather: `${responseData.location.name} ${responseData.current.temp_c} °C`,
            weatherDesc: `${responseData.current.condition.text}`,
            error: null
        }
    } catch (error) {
        return {
            weather: null,
            weatherDesc: null,
            error: error.error.message
        }
    }
}