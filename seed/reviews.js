const db = require('../db')
const { Review, Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const tv1 = await Product.find({ name: 'Class Micro LED 4K Smart Tizen TV' })
    const tv2 = await Product.find({ name: 'Class Neo QLED 4k UHD Smart Tizen TV'})
    const tv3 = await Product.find({ name: 'Class C2 Series OLED evo 4k UHD Smart webOS TV'})

    const reviews = [
        {
            score: 5,
            comment: `I originally was going to save for my child's college fund but I figured I'd splurge a little and get this. Now we can watch bluey in HD. Kids these days have YouTube anyways, so we shall watch that instead. Hoping to use my Best Buy points for the sound system.`,
            productId: tv1[0].id 
          },
          {
            score: 5,
            comment: `One of the best TVs on the market hands down. Pricey but definitely worth what you're getting.`,
            productId: tv2[0].id 
          },
          {
            score: 3,
            comment: `Im kind of disappointed in the EVO 2! The picture isnt as bright as i thought it would be. Not satisfied with mone of the setting. Just over priced!`,
            productId: tv3[0].id 
          },
    ]
    await Review.insertMany(reviews)
    console.log('Created products!')
}

const run = async () => {
    await main()
    db.close()
  }
  run()