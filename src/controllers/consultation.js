const Consultation = require('../models/consultation')


exports.create = async (req, res) => {
    try {
        console.log('create consultation')
        const newConsultation = await new Consultation(req.body).save()
        return res.json(newConsultation)
    } catch (error) {
        console.log(error)
        res.status(400).send('create consultation failed')
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await Consultation.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            {new: true}
        ).exec()
        return res.json(updated)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}
exports.remove = async (req, res) => {
    try {
        const deleted = await Consultation.findOneAndRemove( {_id: req.params._id} ).exec()
        res.json(deleted)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.getByPatient = async (req, res) => {
    try {
        const deleted = await Consultation.find( {patient: req.params.idPatient} ).exec()
        res.json(deleted)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.getById = async (req, res) => {
    try {
        const consultation = await Consultation.find( {_id: req.params._id} ).exec()
        res.json(consultation)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}
