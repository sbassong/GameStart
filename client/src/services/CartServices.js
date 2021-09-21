import Client from './api'

export const GetCart = async (cart_id) => {
  try {
    const res = await Client.get(`/${cart_id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteCartItem = async (game_id) => {
  try {
    const res = await Client.delete(`/${game_id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}