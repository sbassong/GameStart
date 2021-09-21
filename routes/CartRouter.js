const Router = require('express').Router()
const controller = require('../controllers/CartController')

Router.get('/items/:cart_id/', controller.GetCartItems)
Router.get('/:user_id', controller.GetCart)
Router.delete('/:cart_game_id', controller.DeleteCartItem)
Router.post('/:user_id', controller.CreateCart)
Router.post('/item/add', controller.AddToCart)

module.exports = Router
