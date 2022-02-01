const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const raceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        specie: { type: ObjectId, ref:'Specie'}
    },
    { timestamp: true },
)

module.exports = mongoose.model('Race', raceSchema)