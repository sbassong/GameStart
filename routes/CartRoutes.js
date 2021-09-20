const Router = require('express').Router()
const controller = require('../controllers/GamesController')

Router.get('/view/:cart_id', controller.GetCartDetails)
Router.post('/:user_id', controller.CreateCart)

// Implement these routes
Router.get('/view/:cart_id')
Router.post('/:user_id')
Router.put('/:cart_id')
Router.delete('/:cart_id')


// Implement these routes
module.exports = Router
