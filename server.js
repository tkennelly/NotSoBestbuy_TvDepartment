const express = require('express')
const cors = require('cor')
const PORT = process.env.PORT || 3001
const db = require('./db')
const AppRouter = require('./routes/appRouter.js')

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => console(`Server running on port ${PORT}`))

app.get('/', (req, res) => res.json({message: 'This is the home page'}))

app.use('/api', AppRouter)