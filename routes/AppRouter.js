const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const CartRouter = require('./CartRouter')
const GamesRouter = require('./GamesRouter')
Router.use('/users', UserRouter)
Router.use('/feed', CartRouter)
Router.use('/comments', GamesRouter)
module.exports = Router
