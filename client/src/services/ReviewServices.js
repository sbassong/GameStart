import Client from './api'

export const GetReviews = async () => {
  try {
    const res = await Client.get('/game/reviews')
    return res.data
  } catch (error) {
    throw error
  }
}