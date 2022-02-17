const TypeOfVaccine = require('../models/typesOfVaccines')
const slugify = require('slugify')
exports.create = async (req, res) => {
    try {
        console.log("CREATE typeOfVaccine");
        req.body.slug = slugify(req.body.name)
        const typeOfVaccine = await new TypeOfVaccine(req.body).save()
        return res.json(typeOfVaccine)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await TypeOfVaccine.findOneAndUpdate(
            { _id: req.params.slug },
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
        const typeOfVaccine = await TypeOfVaccine.findOne( {_id:req.params._id} ).exec()
        res.json(typeOfVaccine)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.getByName = async (req, res) => {
    try {
        const typeOfVaccine = await TypeOfVaccine.find({"name": req.params.slug}).exec()
        return res.json(typeOfVaccine)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.listAll = async (req, res) => {
    try {
        const typeOfVaccines = await TypeOfVaccine.find({}).exec()
        res.json(typeOfVaccines)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.remove = async (req, res) => {
    try {
        const deleted = await TypeOfVaccine.findOneAndRemove( {_id: req.params.slug} ).exec()
        res.json(deleted)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}