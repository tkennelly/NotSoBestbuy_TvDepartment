const express = require('express')
const router = express.Router()
const controller = require('../controllers/reviewController.js')

router.post('/', controller.createReview)
router.get('/', controller.getAllReviews)
router.get('/:id', controller.getReviewById)
router.get('/product/:id', controller.getReviewsByProductId)
router.put('/:id', controller.updateReview)
router.delete('/:id', controller.deleteReview)

module.exports = router