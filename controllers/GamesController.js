const { User, Games } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetPopularGames = async (req, res) => {
  try {
    const popular = await Games.findAll({
      order: [['likes', 'DESC']],
      attributes: [
        'id',
        'content',
        'likes',
        [fn('COUNT', col('games.id')), 'gamesCount']
      ],
      where: { likes: { [Op.gt]: 3000 } },
      include: [
        { model: User, as: 'owner', attributes: ['name', 'id'] },
        { model: Game, as: 'games', attributes: [] }
      ],
      group: ['Games.id', 'owner.id']
    })
    res.send(popular)
  } catch (error) {
    throw error
  }
}

const GetRecentGames = async (req, res) => {
  try {
    const recents = await Games.findAll({ order: [['created_at', 'DESC']] })
    res.send(recents)
  } catch (error) {
    throw error
  }
}

const GetGameDetails = async (req, res) => {
  try {
    const game = await Games.findByPk(req.params.games_id)
    res.send(game)
  } catch (error) {
    throw error
  }
}

const CreateGame = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.user_id)
    let gameBody = {
      ownerId,
      ...req.body
    }
    let game = await Games.create(gameBody)
    res.send(game)
  } catch (error) {
    throw error
  }
}

const UpdateGame = async (req, res) => {
  try {
    let gameId = parseInt(req.params.game_id)
    let updatedGame = await Games.update(req.body, {
      where: { id: gameId },
      returning: true
    })
    res.send(updatedGame)
  } catch (error) {
    throw error
  }
}

const DeleteGame = async (req, res) => {
  try {
    let gameId = parseInt(req.params.game_id)
    await Games.destroy({ where: { id: gameId } })
    res.send({ message: `Deleted game with an id of ${gameId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPopularGames,
  GetRecentGames,
  GetGameDetails,

  CreateGame,
  UpdateGame,
  DeleteGame
}
