const Router = require('express').Router()
const controller = require('../controllers/CartController')

Router.get('/:cart_id', controller.GetCartDetails)
Router.delete('/:game_id', controller.DeleteCartItem)

module.exports = Router
