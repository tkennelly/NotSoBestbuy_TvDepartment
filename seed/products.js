const db = require('../db')
const { Product, Brand } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    
    const products = [
        {
            name: '',
            price: { type: Number, required: true },
            description: { type: String, required: true },
            brand: { type: Schema.Types.ObjectId, ref: 'brand'},
            size: { type: String, required: true },
            modelNum: { type: Number, required: true },
            itemsInStock: { type: Number, required: true }
          },
    ]
}