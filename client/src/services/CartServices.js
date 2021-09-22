import Client from './api'

export const GetCart = async (user_id) => {
  try {
    const res = await Client.get(`cart/${user_id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCartItems = async (cart_id) => {
  try {
    const res = await Client.get(`cart/items/${cart_id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteCartItem = async (cart_game_id) => {
  try {
    const res = await Client.delete(`cart/${cart_game_id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddToCart = async (data) => {
  try {
    const res = await Client.post('cart/add', data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}