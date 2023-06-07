const express = require('express')
const router = express.Router()
const controller = require('../controllers/reviewController.js')

router.post('/', controller.createReview)
router.get('/', controller.getAllReviews)
router.get('/:id', controller.getReview)
router.push('/:id', controller.updateReview)
router.delete('/:id', controller.deleteReview)

module.exports = router