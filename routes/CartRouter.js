const Router = require('express').Router()
const controller = require('../controllers/CartController')

Router.delete('/item/:cart_game_id', controller.DeleteCartItem)
Router.get('/items/:user_id', controller.GetCartItems)
Router.get('/:user_id', controller.GetCart)
Router.post('/:user_id', controller.CreateCart)
Router.post('/item/add', controller.AddToCart)

module.exports = Router
