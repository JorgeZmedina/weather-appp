const request = require('request')


//destructuring syntax
const forecast= (latitude,longitude,callback) => {
    const url ='http://api.weatherstack.com/current?access_key=ae61cd878c28a361959748a64e898d22&query=' + latitude + ',' + longitude + '&units=f'


    request({url, json:true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike +' degrees out.')
        }
    })
}

module.exports = forecast