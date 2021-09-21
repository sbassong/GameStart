const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.GetProfiles)
Router.get('/:user_id', controller.GetUserProfile)
Router.post('/login', controller.Login)
Router.post('/signup', controller.SignUp)

Router.post(
  '/update/password/:user_id',
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

Router.put('/update/:user_id', controller.UpdateUser)

Router.delete('/delete/:user_id', controller.DeleteUser)

module.exports = Router
