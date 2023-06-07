const express = require('express')
const router = express.Router()
const controller = require('../controllers/reviewController.js')

router.get('/', controller.getAllReviews)
router.get('/:id', controller.getReview)

module.exports = router