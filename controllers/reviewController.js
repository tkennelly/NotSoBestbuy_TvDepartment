const { Review } = require('../models')

const createReview = async (req, res) => {
    try {
        const review = new Review(req.body)
        await review.save()
        return res.status(200).json({ review })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getAllReviews = async (req, res) =>{
    try{
        const reviews = await Review.find()
        return res.status(200).json({ reviews })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const getReview = async (req,res) => {
    try{
        const { id } = req.params
        const review = await Review.findById(id)
        if(brand){
            return res.status(200).json({ review })
        } else {
            return res.status(400).json({message:'Review does not exist.'})
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updateReview = async (req, res) => {
    try {
        const {id} = req.params
        const review = await Review.findByIdAndUpdate(id, req.body, {new: true} ) 
        if (review) {
            return res.status(200).json({review})
        } else {
            return res.status(400).json({message: 'Review does not exist.'})
        }
        
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteReview = async (req, res) => {
    try {
        const {id} = req.params
        const review = await Review.findByIdAndDelete(id)
        if (review) {
            return res.status(200).json({review})
        } else {
            return res.status(400).json({message: 'Review does not exist.'})
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    createReview,
    getAllReviews,
    getReview,
    updateReview,
    deleteReview
}