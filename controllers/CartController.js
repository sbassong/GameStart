const { Cart, Game, Cart_game } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetCartDetails = async (req, res) => {
  try {
    const cart = await Cart.findAll({
      include: [{ model: Game, as: 'cart', through: { attributes: [] } }]
    })
    res.send(cart)
  } catch (error) {
    throw error
  }
}

const CreateCart = async (req, res) => {
  try {
    let user_id = parseInt(req.params.user_id)
    let cartBody = {
      user_id,
      ...req.body
    }
    let cart = await Cart.create(cartBody)
    res.send(cart)
  } catch (error) {
    throw error
  }
}

const AddToCart = async (req, res) => {
  try {
    const cart_item = await Cart_game.create(req.body)
    res.send(cart_item)
  } catch (error) {
    throw error
  }
}

const DeleteCartItem = async (req, res) => {
  try {
    let cartId = parseInt(req.params.cart_id)
    await Carts.destroy({ where: { id: cartId } })
    res.send({ message: `Deleted cart item with an id of ${cartId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCartDetails,
  CreateCart,
  AddToCart,
  DeleteCartItem
}
