const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather_request.js')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res. render('index', {weather: null, weatherDesc: null, error: null})
})

app.post('/', async (req, res) => {
    const {city} = req.body
    const {weather, weatherDesc, error} = await weatherRequest(city)
    res.render('index.ejs', {weather, weatherDesc, error})
})

app.listen(3000, () => {
    console. log('Server has started on port 3000...')
})