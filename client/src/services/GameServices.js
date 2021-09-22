import Client from './api'

export const GetGames = async () => {
  try {
    const res = await Client.get('games/listings')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetRecentGames = async () => {
  try {
    const res = await Client.get('games/recent')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPopularGames = async () => {
  try {
    const res = await Client.get('games/popular')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetGamesByTitle = async (game_title) => {
  try {
    const res = await Client.get(`games/${game_title}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
