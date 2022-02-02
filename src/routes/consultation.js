const express = require('express')
const router = express.Router()

const { create, update, softRemove, hardRemove, read} = require('../controllers/consultation')

router.post('/consultation', create)

router.get('/consultation', read)

router.put('/consultation', update)

router.patch('/consultation', softRemove)

router.delete('/consultation', hardRemove)


module.exports = router