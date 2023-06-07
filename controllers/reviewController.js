const { Review } = require('../models')

const getAllReviews = async(req,res) =>{
    try{
        const reviews = await Review.find()
        return res.status(200).json({ reviews })
    } catch(e){
        res.status(500).send(e.message)
    }
}

const getReview = async(req,res) => {
    try{
        const { id } = req.params
        const review = await Review.findById(id)
        if(brand){
            return res.status(200).json({ review })
        } else {
            return res.status(400).send('Review doesnt exist')
        }
    } catch(e){
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllReviews,
    getReview
}