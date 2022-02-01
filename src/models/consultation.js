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
        },
        veterinarian: {
            type: ObjectId,
            ref: 'User'
        },
        patient: {
            type: ObjectId,
            ref: 'Patient'
        },
        weightPatient: {
            type: number,
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