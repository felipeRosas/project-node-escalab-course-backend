const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: [2, 'too short name'],
            maxlength: [32, 'too long name']
        },
        color: {
            type: String,
            lowercase: true
        },
        chipNumber: {
            type: Number,
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        owner: {type: ObjectId, ref: 'User'},
        race: {type: ObjectId, ref: 'Race'}
    },
    { timestamp: true },
)

module.exports = mongoose.model('Patient', patientSchema)