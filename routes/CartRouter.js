const Router = require('express').Router()
const controller = require('../controllers/GamesController')

Router.get('/:cart_id', controller.GetCart)
Router.delete('/:game_id', controller.DeleteCartItem)


module.exports = Router
