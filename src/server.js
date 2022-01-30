const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const {readdirSync} = require('fs')
const connectDB = require('./database')

require('dotenv').config()

const app = express()

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json({limit: '2mb'}))
app.use(express.urlencoded({extended:false}))

readdirSync(__dirname+"/routes").map((r) => app.use("/api", require("./routes/" + r)));

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`server on port ${port}`)
})