const express = require('express')
const router = express.Router()

const { create, update, read, listAll, remove} = require('../controllers/race')

router.post('/races', create)
router.put('/races/:slug', update)
router.get('/races/:slug', read)
router.get('/races/:count', listAll)
router.delete('/races/:slug', remove)


module.exports = router