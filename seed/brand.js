const db = require('../db')
const { Brand } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const brands = [
        {
            name: 'Samsung',
            priceRange: 'High',
            brandNum: 26384
          },
          {
            name: 'LG',
            priceRange: 'Medium',
            brandNum: 37495
          },
          {
            name: 'Sony',
            priceRange: 'High',
            brandNum: 48572
          },
          {
            name: 'TCL',
            priceRange: 'Budget',
            brandNum: 18468
          },
          {
            name: 'VIZIO',
            priceRange: 'Budget',
            brandNum: 45668
          }
    ]
    await Product.insertMany(products)
    console.log('Created products!')
}

const run = async () => {
    await main()
    db.close()
  }
  run()