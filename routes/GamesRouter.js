const Router = require('express').Router()
const controller = require('../controllers/GamesController')

Router.get('/popular', controller.GetPopularGames)
Router.get('/recent', controller.GetRecentGames)
Router.get('/listings', controller.GetGames)
Router.get('/:game_title', controller.GetGameByTitle)
Router.post('/new_game', controller.CreateGame)
Router.delete('/:game_id', controller.DeleteGame)

module.exports = Router
