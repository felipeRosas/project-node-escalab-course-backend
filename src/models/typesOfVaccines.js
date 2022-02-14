const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const typeOfVaccine = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        description: {
            type: String,
        },
        species: {
            type: ObjectId,
            ref: 'Specie'
        },
        
    },
    { timestamp: true },
)

module.exports = mongoose.model('TypeOfVaccine', typeOfVaccine)