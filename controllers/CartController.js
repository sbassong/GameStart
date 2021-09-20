const { User, Games, Carts } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetCartDetails = async (req, res) => {
  try {
    const cart = await Carts.findByPk(req.params.carts_id)
    res.send(carts)
  } catch (error) {
    throw error
  }
}

const CreateCart = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.user_id)
    let cartBody = {
      ownerId,
      ...req.body
    }
    let cart = await Carts.create(cartBody)
    res.send(cart)
  } catch (error) {
    throw error
  }
}

const UpdateCart = async (req, res) => {
  try {
    let cartId = parseInt(req.params.cart_id)
    let updatedCart = await Carts.update(req.body, {
      where: { id: cartId },
      returning: true
    })
    res.send(updatedCart)
  } catch (error) {
    throw error
  }
}

const DeleteCart = async (req, res) => {
  try {
    let cartId = parseInt(req.params.cart_id)
    await Carts.destroy({ where: { id: cartId } })
    res.send({ message: `Deleted cart with an id of ${cartId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCartDetails,
  CreateCart,
  UpdateCart,
  DeleteCart
}
