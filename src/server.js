const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const {readdirSync} = require('fs')
const connectDB = require('./database')

//swagger
const swaggerUI = require("swagger-ui-express")
const swaggerJSdoc = require('swagger-jsdoc')
const swaggerConfig = require('./documentation/swagger.config.json')

require('dotenv').config()

const app = express()

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json({limit: '2mb'}))
app.use(express.urlencoded({extended:false}))

const swaggerDocs = swaggerJSdoc(swaggerConfig)
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs, {explorer: true} ))

readdirSync(__dirname+"/routes").map((r) => app.use("/api", require("./routes/" + r)));

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`server on port ${port}`)
})