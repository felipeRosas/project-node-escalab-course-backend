const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const specieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamp: true },
)

module.exports = mongoose.model('Specie', specieSchema)