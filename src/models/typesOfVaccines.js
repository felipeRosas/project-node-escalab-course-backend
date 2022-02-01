const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const typeOfVaccine = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        species: [{
            type: ObjectId,
            ref: 'Specie'
        }],
        
    },
    { timestamp: true },
)

module.exports = mongoose.model('TypeOfVaccine', typeOfVaccine)