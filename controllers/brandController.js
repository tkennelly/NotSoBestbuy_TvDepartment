const { Brand } = require('../models')

const getAllBrands = async(req,res) => {
    try {
        const brands = await Brand.find()
        return res.status(200).json({ brands })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const getBrand = async(req,res) =>{
    try{
        const { id } = req.params
        const brand = await Brand.findById(id)
        if(brand){
            return res.status(200).json({ brand })
        } else {
            return res.status(400).send('Brand Doesnt Exist')
        }
    } catch (e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllBrands,
    getBrand
}