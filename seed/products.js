const db = require('../db')
const { Product, Brand } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const brand1 = await Brand.find({ name: 'Samsung' })
    const brand2 = await Brand.find({ name: 'LG' })
    const brand3 = await Brand.find({ name: 'Sony' })
    const brand4 = await Brand.find({ name: 'TCL' })
    const brand5 = await Brand.find({ name: 'VIZIO' })

    const products = [
        {
            name: `Class Micro LED 4K Smart Tizen TV`,
            price: 149999.99,
            description: `Welcome to a bold new world of luxury entertainment: MICRO LED.With sound this powerful, you might wonder where all the speakers are hidden. Keep up with it all—all on one convenient screen, all in real-time with 4Vue.Your Hollywood experience turns larger than life with nearly infinite color gradations.
            `,
            brand: brand1[0].id,
            size: `110"`,
            modelNum: 3295483698,
            itemsInStock: 10
          },
          {
            name: `Class Neo QLED 4k UHD Smart Tizen TV`,
            price: 14999.99,
            description: `Our best 4K picture offers lush visuals and crisp detail that create an unmatched cinematic experience.`,
            brand: brand1[0].id,
            size: `98"`,
            modelNum: 3295486967,
            itemsInStock: 9
          },
          {
            name: `Class C2 Series OLED evo 4k UHD Smart webOS TV`,
            price: 1299.99,
            description: `The Award-Winning¹ LG OLED C2 Is Better Than Ever. The versatile LG OLED C Series has gotten even more impressive with brighter colors, a new, more advanced processor and a sleeker, slimmer bezel. Self-lit LG OLED pixels create beautiful picture quality with infinite contrast, perfect black and over a billion colors, now even brighter.`,
            brand: brand2[0].id,
            size: `55"`,
            modelNum: 4629488887,
            itemsInStock: 8
          },
          {
            name: `Class UQ75 Series LED 4K UHD Smart webOS TV`,
            price: 599.99,
            description: `Dive into a world of free content, thanks to over 300+ free LG Channels¹ and personalized recommendations for everyone you share the remote with.`,
            brand: brand2[0].id,
            size: `70"`,
            modelNum: 4629483409,
            itemsInStock: 7
          },
          {
            name: `Class BRAVIA XR X92 LED 4K UHD Full Array Smart Google TV`,
            price: 9999.99,
            description: `Bring your home theater to life with the ultra-large screen 100” class (99.5” diag.) BRAVIA XR X92 Full Array LED TV. Everything you watch becomes more detailed and immersive with true-to-life 4K HDR, powered by the all-new Cognitive Processor XR. Feel the intensity of the sun and experience all the stars of the night sky with Full Array LED and XR Contrast Booster.`,
            brand: brand3[0].id,
            size: `100"`,
            modelNum: 4793729047,
            itemsInStock: 6
          },
          {
            name: `Class BRAVIA XR Z9K 8K HDR Mini LED Google TV`,
            price: 7999.99,
            description: `Pristine 8K resolution meets astounding Mini LED contrast for a next-level viewing experience, powered by the intelligent Cognitive Processor XR. Feel your senses get pushed to the limit with thousands of tiny, high-density Mini LEDs in precisely controlled lighting zones. Coupled with XR Backlight Master Drive, the BRAVIA XR Z9K delivers unprecedented brightness, color, and contrast that make your content feel impossibly real.`,
            brand: brand3[0].id,
            size: `85"`,
            modelNum: 479372749,
            itemsInStock: 5
          },
          {
            name: `Class 3-Series HD 720p LED Smart Roku TV`,
            price: 129.99,
            description: `The TCL 3-Series is the simply smart way to enjoy endless entertainment. Enjoy over half a million movies and TV episodes available to stream plus sports, news, music, kids and family, food, science and tech, fitness, foreign language and so much more. Start streaming free TV right from your home screen or browse 250+ free live channels with the Live TV Channel Guide to find what to watch next. Your favorite broadcast TV, streaming channels, gaming console and other devices are front-and-center within a simple, customizable home screen.`,
            brand: brand4[0].id,
            size: `32"`,
            modelNum: 5738290571,
            itemsInStock: 4
          },
          {
            name: `Class 3-Series FHD 1080p LED Smart Google TV`,
            price: 129.99,
            description: `Your entertainment is all in one place. Choose from 700,000+ movies and shows from across your favorite apps, intelligently organized just for you. Tune into live shows, curate watchlists, and get recommendations based on what you have watched and what interests you. Finding what to watch has never been easier with a TCL featuring Google TV. Use your voice to find movies, stream apps, play music, and control the TV. Ask Google to find a specific title, search by genre, or get personalized recommendations by saying, “what should I watch?” Even get answers like sports scores, control smart home devices, and more. Press the Google Assistant button on the remote control to get started.`,
            brand: brand4[0].id,
            size: `32"`,
            modelNum: 5738292897,
            itemsInStock: 3
          },
          {
            name: `Class D-Series LED 720p Smart TV`,
            price: 99.99,
            description: `Versatility and performance collide with the new VIZIO D-Series HD Smart TV. D-Series comes loaded with a full array backlight for better contrast and uniformity, brilliant 720p HD resolution and an ultra-fast VIZIO IQ processor with support for immersive audio pass-through for Dolby Atmos and DTS:X. Stream it all with the award-winning SmartCast platform loaded with the best selection of built-in apps including WatchFree+ that lets you enjoy free access to live TV and hundreds of free channels right out of the box.`,
            brand: brand5[0].id,
            size: `24"`,
            modelNum: 6950049284,
            itemsInStock: 2
          },
          {
            name: `Class D-Series Full HD Smart TV`,
            price: 169.99,
            description: `Celebrate VIZIO's 20th Anniversary with the NEW VIZIO D-Series Smart TV. America's Smart TV allows you to access millions of movies, shows, sports, news, and more in seconds in cinematic picture quality. New features include smoother gaming, VIZIO Voice Remote for simple searching, and Bluetooth headphone capability optimized with built-in streaming - all powered by the IQ Processor and fast dual-band WiFi 5.`,
            brand: brand5[0].id,
            size: `32"`,
            modelNum: 6950042863,
            itemsInStock: 1
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