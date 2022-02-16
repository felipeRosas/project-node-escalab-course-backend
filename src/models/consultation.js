const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const consultationSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true
        },
        annotation: {
            type: String,
            required: true
        },
        veterinarian: {
            type: ObjectId,
            ref: 'User',
            required: true
        },
        patient: {
            type: ObjectId,
            ref: 'Patient',
            required: true
        },
        weightPatient: {
            type: Number,
        },
        dateNextConsultation: {
            type: Date,
        },
        vaccine: {
            type: ObjectId,
            ref: 'Vaccine'
        },
    },
    { timestamp: true },
)

module.exports = mongoose.model('Consultation', consultationSchema)