import Client from './api'

export const GetGames = async () => {
  try {
    const res = await Client.get('games/listings')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetRecentGames = async () => {
  try {
    const res = await Client.get('games/recent')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPopularGames = async () => {
  try {
    const res = await Client.get('games/popular')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetGamesByTitle = async (game_title) => {
  try {
    const res = await Client.get(`games/${game_title}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetOneGame = async (game_id) => {
  try {
    const res = await Client.get(`games/game/${game_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

