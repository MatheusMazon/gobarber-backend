const express = require('express')

const SessionController = require('./controllers/SessionController')
const RegisterController = require('./controllers/RegisterController')
const HomeController = require('./controllers/HomeController')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ message: 'server is up and running...' })
})

routes.post('/sessions', SessionController.store)

routes.post('/register', RegisterController.store)

routes.get('/home', HomeController.show)



module.exports = routes