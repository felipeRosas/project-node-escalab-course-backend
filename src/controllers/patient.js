const Patient = require('../models/patient')

exports.create = async (req, res) => {
    try {
        console.log("CREATE PATIENT");
        const newPatient = await new Patient(req.body).save()
        return res.json(newPatient)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.update = async (req, res) => {
    try {
        console.log(req.params)
        const updated = await Patient.findOneAndUpdate(
            { _id: req.params._id },
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

exports.getById = async (req, res) => {
    try {
        const patient = await Patient.findOne( {_id:req.params._id} ).exec()
        res.json(patient)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.getByName = async (req, res) => {
    try {
        const patients = await Patient.find({"name": req.params.name}).exec()
        return res.json(patients)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.listAll = async (req, res) => {
    try {
        const patients = await Patient.find({}).exec()
        res.json(patients)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.remove = async (req, res) => {
    try {
        const deleted = await Patient.findOneAndRemove( {_id: req.params._id} ).exec()
        res.json(deleted)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}
