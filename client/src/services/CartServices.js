import Client from './api'

export const GetCart = async (user_id) => {
  try {
    const res = await Client.get(`/${user_id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteCartItem = async (item_id) => {
  try {
    const res = await Client.delete(`/${item_id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddToCart = async (data) => {
  try {
    const res = await Client.post('/add', data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}