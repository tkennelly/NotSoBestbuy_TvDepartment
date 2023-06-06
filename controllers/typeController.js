const { Type } = require('../models')

const getAllTypes = async(req,res) => {
    try {
        const types = await Type.find()
        return res.status(200).json({ types })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const getType = async(req,res) =>{
    try{
        const { id } = req.params
        const type = await Type.findById(id)
        if(type){
            return res.status(200).json({ type })
        } else {
            return res.status(400).send('Type Doesnt Exist')
        }
    } catch (e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllTypes,
    getType
}