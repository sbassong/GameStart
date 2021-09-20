const { User, Games } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetPopularGames = async (req, res) => {
  try {
    const popular = await Games.findAll({
      order: [['likes', 'DESC']],
      attributes: [
        'id',
        'content',
        'rating',
        [fn('COUNT', col('games.id')), 'gamesCount']
      ],
      where: { likes: { [Op.gt]: 30 } },
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

const GetGames = async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.games_id)
    res.send(game)
  } catch (error) {
    throw error
  }
}

const GetGameByTitle = async (req, res) => {
  try {
    const game = await Game.findAll({
      where: { title: { [Op.like]: `%${req.params.game_title}%` } }
    })
    res.send(game)
  } catch (error) {
    throw error
  }
}
const CreateGame = async (req, res) => {
  try {
    const game = await Game.create(req.body)
    res.send(game)
  } catch (error) {
    throw error
  }
}
const DeleteGame = async (req, res) => {
  try {
  await Game.destroy(req.params.game_id)
    res.send({msg:'Game successfully deleted'})
  } catch (error) {
    throw error
  }
}
// const UpdateGame = async (req, res) => {
//   try {
//     const game = await Game.update(req.body)
//     res.send(game)
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  GetPopularGames,
  GetRecentGames,
  GetGames,
  GetGameByTitle,
  CreateGame,
  DeleteGame
}
