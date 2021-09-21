import Client from './api'

export const GetReviews = async (game_id) => {
  try {
    const res = await Client.get(`/reviews/${game_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
