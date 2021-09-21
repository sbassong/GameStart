import Client from './api'

export const GetGames = async () => {
  try {
    const res = await Client.get('/listings')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetRecentGames = async () => {
  try {
    const res = await Client.get('/recent')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPopularGames = async () => {
  try {
    const res = await Client.get('/popular')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetGamesByTitle = async (game_title) => {
  try {
    const res = await Client.get(`/${game_title}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
