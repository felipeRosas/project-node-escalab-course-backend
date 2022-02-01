const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
        },
        chipNumber: {
            type: Number,
        },
        dateOFBirth: {
            type: Date,
            required: true
        },
        owner: {type: ObjectId, ref: 'User'},
        race: {type: ObjectId, ref: 'Race'}
    },
    { timestamp: true },
)

module.exports = mongoose.model('Patient', patientSchema)