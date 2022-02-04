const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const specieSchema = new mongoose.Schema(
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
            lowecase: true,
            index: true,
        },
        description: {
            type: String,
            maxLenght: 512
        }
    },
    { timestamp: true },
)

module.exports = mongoose.model('Specie', specieSchema)