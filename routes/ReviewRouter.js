const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/reviews', controller.GetReviews)
Router.post('/reviews/add', controller.CreateReview)
Router.put('/reviews/update/:review_id', controller.UpdateReview)
Router.delete('/reviews/:review_id', controller.DeleteReview)

module.exports = Router
