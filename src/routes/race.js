const express = require('express')
const router = express.Router()

const { create, update, read, listAll, remove} = require('../controllers/race')

// middlewares
const {
    authCheck,
    vetarinarianCheck,
  } = require("../middlewares/auth");

/**
 * @swagger
 * /races:
 *   post:
 *     summary: create a new race
 *     tags: [Race]
 *     parameters:
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Race"
 *     responses:
 *       200: 
 *         description: race created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Race"
 *       400:
 *         description: bad request  
 */
router.post('/races', authCheck, vetarinarianCheck, create)

/**
 * @swagger
 * /races/{slug}:
 *   put:
 *     summary: update a race
 *     tags: [Race]
 *     parameters:
 *       - name: "slug"
 *         in: "path"
 *         description: "slug of race"
 *         required: true
 *         type: "string"
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Race"
 *     responses:
 *       200: 
 *         description: race updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Race"
 *       400:
 *         description: bad request  
 */
router.put('/races/:slug', authCheck, vetarinarianCheck, update)

 /**
 * @swagger
 * /races/{slug}:
 *   get:
 *     tags: [Race]
 *     summary: "get an specific race"
 *     description: "return a single race"
 *     parameters:
 *       - name: "slug"
 *         in: "path"
 *         description: "slug of race"
 *         required: true
 *         type: "string"
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       200:
 *         description: return an specific race
 *         schema:
 *           $ref: "#/components/schemas/Race"
 * 
 */
router.get('/races/:slug', authCheck, read)

/**
 * @swagger
 * /races:
 *   get:
 *     tags: [Race]
 *     summary: "get a list of races"
 *     parameters:
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       200:
 *         description: return a list of races
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Race"
 *       400:
 *         description: bad request
 * 
 */
router.get('/races', authCheck, listAll)

 /**
 * @swagger
 * /races/{slug}:
 *   delete:
 *     tags: [Race]
 *     summary: "delete an specific race"
 *     description: "removes a race and returns this"
 *     parameters:
 *       - name: "slug"
 *         in: "path"
 *         description: "slug of race"
 *         required: true
 *         type: "string"
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       200:
 *         description: returns the deleted race
 *         schema:
 *           $ref: "#/components/schemas/Race"
 * 
 */
router.delete('/races/:slug', authCheck, vetarinarianCheck, remove)


module.exports = router

// SWAGGER SCHEMA
/**
 *  @swagger
 *  components:
 *    schemas:
 *      Race:
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
 *          specie:
 *            $ref: '#/components/schemas/Specie'
 *            
 */