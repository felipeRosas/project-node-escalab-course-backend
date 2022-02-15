const Race = require('../models/race')
const slugify = require('slugify')

exports.create = async (req, res) => {
    try {
        console.log("CREATE RACE");
        req.body.slug = slugify(req.body.name)
        const newRace = await new Race(req.body).save()
        return res.json(newRace)
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
        const updated = await Race.findOneAndUpdate(
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
        const specie = await Race.findOne( {"slug":req.params.slug} ).exec()
        res.json(specie)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.getBySpecie = async (req, res) => {
    try {
        const races = await Race.find({"specie":req.params.specie})
        return res.json(races)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.listAll = async (req, res) => {
    try {
        const species = await Race.find({}).exec()
        console.log(species)
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
        const deleted = await Race.findOneAndRemove( {"slug": req.params.slug} ).exec()
        res.json(deleted)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}
