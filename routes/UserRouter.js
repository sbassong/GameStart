const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.GetProfiles)
Router.get('/:user_id', controller.GetUserProfile)
Router.post('/login', controller.Login)
router.post('/register', controller.Register)

Router.post(
  '/update',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = Router
