const Vaccine = require('../models/vaccine')

exports.create = async (req, res) => {
    try {
        console.log("CREATE Vaccine");
        const newVaccine = await new Vaccine(req.body).save()
        return res.json(newVaccine)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await Vaccine.findOneAndUpdate(
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
        const vaccine = await Vaccine.findOne( {_id:req.params._id} ).exec()
        res.json(vaccine)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.getByPatient = async (req, res) => {
    try {
        const vaccine = await Vaccine.find( {patient:req.params._id} ).exec()
        res.json(vaccine)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.remove = async (req, res) => {
    try {
        const deleted = await Vaccine.findOneAndRemove( {_id: req.params._id} ).exec()
        res.json(deleted)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}