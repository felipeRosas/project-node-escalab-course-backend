const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["owner", "veterinarian"],
            default: 'owner'
        },
        address: {
            type: String,
            required: true
        },
        rut: {
            type: String,
            required: true
        },
        dateOFBirth: {
            type: Date,
            required: true
        },
        phone: {
            type: Number,
            maxlength: 10
        },
    },
    { timestamp: true },
)

module.exports = mongoose.model('User', userSchema)