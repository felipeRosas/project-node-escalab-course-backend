const express = require('express')
const router = express.Router()

const { create, update, read, listAll, remove} = require('../controllers/specie')


/**
 * @swagger
 * /species:
 *   post:
 *     summary: create a new specie
 *     tags: [Specie]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Specie"
 *     responses:
 *       200: 
 *         description: specie created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Specie"
 *       400:
 *         description: bad request  
 */
router.post('/species', create)

/**
 * @swagger
 * /species/{slug}:
 *   put:
 *     summary: update a specie
 *     tags: [Specie]
 *     parameters:
 *       - name: "slug"
 *         in: "path"
 *         description: "slug of specie"
 *         required: true
 *         type: "string"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Specie"
 *     responses:
 *       200: 
 *         description: specie updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Specie"
 *       400:
 *         description: bad request  
 */
router.put('/species/:slug', update)

/**
 * @swagger
 * /species/{count}:
 *   get:
 *     tags: [Specie]
 *     summary: "get a list of species"
 *     parameters:
 *       - name: "count"
 *         in: "path"
 *         description: "count product search"
 *         required: true
 *         type: "integer"
 *         format: "int64"
 *   responses:
 *     200:
 *       description: return a list of species
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: "#/components/schemas/Specie"
 * 
 */
 router.get('/species/:count', listAll)

router.get('/species/:slug', read)


router.delete('/species/:slug', remove)


module.exports = router

// SWAGGER SCHEMA
/**
 *  @swagger
 *  components:
 *    schemas:
 *      Specie:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          name:
 *            type: string
 *            trim: true
 *            minlength: 2
 *            maxlength: 32
 *          slug:
 *            type: string
 *            unique: true
 *            lowercase: true
 *            index: true
 *          description:
 *            type: string
 *            maxlength: 512
 */