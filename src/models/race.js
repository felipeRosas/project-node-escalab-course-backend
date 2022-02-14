const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const raceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: [2, "Too short"],
            maxlength: [32, "Too long"],
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
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