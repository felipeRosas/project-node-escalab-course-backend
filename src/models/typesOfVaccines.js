const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const typeOfVaccine = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: [2, 'too short name'],
            maxlength: [32, 'too long name']
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        description: {
            required: true,
            type: String,
        },
        specie: {
            required: true,
            type: ObjectId,
            ref: 'Specie'
        },
        
    },
    { timestamp: true },
)

module.exports = mongoose.model('TypeOfVaccine', typeOfVaccine)