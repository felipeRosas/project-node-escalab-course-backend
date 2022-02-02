const express = require('express')
const router = express.Router()

const { create, update, read, listAll, remove} = require('../controllers/specie')

router.post('/species', create)
router.put('/species/:slug', update)
router.get('/species/:slug', read)
router.get('/species/:count', listAll)
router.delete('/species/:slug', remove)


module.exports = router