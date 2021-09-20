const Router = require('express').Router()
const controller = require('../controllers/GamesController')

Router.get('/trending', controller.GetPopularGames)
Router.get('/recents', controller.GetRecentGames)
Router.get('/view/:game_id', controller.GetGameDetails)
Router.post('/:user_id', controller.CreateGame)


// Implement these routes
Router.get('/view/:game_id')
Router.post('/:user_id')
Router.put('/:game_id')
Router.delete('/:game_id')
// Implement these routes
module.exports = Router