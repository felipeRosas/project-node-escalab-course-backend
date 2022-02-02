const Specie = require('../models/specie')
const slugify = require('slugify')

exports.create = async (req, res) => {
    try {
        req.body.slug = slugify(req.body.name)
        const newSpecie = await new Specie(req.body).save()
        return res.json(newSpecie)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.update = async (req, res) => {
    try {
        if(req.body.name){
            req.body.slug = slugify(req.body.name)
        }
        const updated = await Specie.findOneAndUpdate(
            { slug: req.params.slug },
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

exports.read = async (req, res) => {
    try {
        const specie = await Specie.findOne( {slug:req.params.slug} ).exec()
        res.json(specie)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.listAll = async (req, res) => {
    try {
        const species = await Specie.find({}).limit( parseInt(req.params.count) ).exec()
        res.json(species)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.remove = async (req, res) => {
    try {
        const deleted = await Specie.findOneAndRemove( {slug: req.params.slug} ).exec()
        res.json(deleted)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}
