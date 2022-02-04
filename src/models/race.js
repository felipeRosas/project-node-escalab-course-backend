const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const raceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            unique: true,
            lowecase: true,
            index: true,
        },
        description: {
            type: String,
            maxLenght: 512
        },
        specie: { type: ObjectId, ref:'Specie'}
    },
    { timestamp: true },
)

module.exports = mongoose.model('Race', raceSchema)