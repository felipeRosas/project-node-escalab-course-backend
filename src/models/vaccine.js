const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const vaccine = new mongoose.Schema(
    {
        applicationDate: {
            type: Date,
            required: true
        },
        patient: {
            type: ObjectId,
            ref: 'Patient'
        },
        typeOfVaccine: [{
            type: ObjectId,
            ref: 'TypeOfVaccine'
        }],
        nextApplication:{
            type: Date,
            ref: 'TypeOfVaccine'
        }
        
    },
    { timestamp: true },
)

module.exports = mongoose.model('Consultation', vaccine)