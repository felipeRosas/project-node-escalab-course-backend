const User = require('../models/user')
const slugify = require('slugify')

exports.create = async (req, res) => {
    try {
        console.log("CREATE USER", req.body);
        const {name, lastName} = req.body
        console.log({name, lastName})
        req.body.slug = slugify(`${name.toLowerCase()} ${lastName.toLowerCase()}`)
        const newUser = await new User(req.body).save()
        return res.json(newUser)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await User.findOneAndUpdate(
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

exports.getById = async (req, res) => {
    try {
        const user = await User.findOne( {_id:req.params._id} ).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.getByName = async (req, res) => {
    try {
        const User = await User.find({slug: req.params.slug}).exec()
        return res.json(User)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.listAll = async (req, res) => {
    try {
        const users = await User.find({}).exec()
        res.json(users)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}

exports.remove = async (req, res) => {
    try {
        const deleted = await User.findOneAndRemove( {slug: req.params.slug} ).exec()
        res.json(deleted)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code
        })
    }
}
