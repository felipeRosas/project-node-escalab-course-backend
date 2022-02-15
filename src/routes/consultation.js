const express = require('express')
const router = express.Router()

const { create, update, remove, getByPatient, getById} = require('../controllers/consultation')

/**
 * @swagger
 * /consultation:
 *   post:
 *     summary: create a new consultation register
 *     tags: [Consultation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Consultation'
 *     responses:
 *       200:
 *         description: consultation created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Consultation'
 *       400:
 *         description: bad request
 */
router.post('/consultation', create)

/**
 * @swagger
 * /consultation/byPatient/{idPatient}:
 *   get:
 *     tags: [Consultation]
 *     summary: "get a list of all consultations of a patient"
 *     responses:
 *       200:
 *         description: return a list of consultations of a patient
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Consultation"
 *       400:
 *         description: bad request
 * 
 */
router.get('/consultation/byPatient/:idPatient', getByPatient)

/**
 * @swagger
 * /consultation/_id:
 *   get:
 *     tags: [Consultation]
 *     summary: "get a consultations by id"
 *     responses:
 *       200:
 *         description: return a consultation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Consultation"
 *       400:
 *         description: bad request
 * 
 */
router.get('/consultation/:_id', getById)

/**
 * @swagger
 * /consultation/{_id}:
 *   put:
 *     summary: update a consultation
 *     tags: [Consultation]
 *     parameters:
 *       - name: "_id"
 *         in: "path"
 *         description: "id of consultation"
 *         required: true
 *         type: "string"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Consultation"
 *     responses:
 *       200: 
 *         description: return a updated consultation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Consultation"
 *       400:
 *         description: bad request  
 */
router.put('/consultation/:_id', update)

 /**
 * @swagger
 * /consultation/{_id}:
 *   delete:
 *     tags: [Consultation]
 *     summary: "delete an specific consultation"
 *     description: "removes a consultation and returns this"
 *     parameters:
 *       - name: "_id"
 *         in: "path"
 *         description: "id of consultation"
 *         required: true
 *         type: "string"
 *     responses:
 *       200:
 *         description: returns the deleted consultation
 *         schema:
 *           $ref: "#/components/schemas/Consultation"
 * 
 */
router.delete('/consultation/:_id', remove)


module.exports = router

// SWAGGER SCHEMA
/**
 *  @swagger
 *  components:
 *    schemas:
 *      Consultation:
 *        type: object
 *        required:
 *          - data
 *          - annotation
 *        properties:
 *          date:
 *            type: Date
 *            required: true
 *          annotation:
 *            type: string
 *            lowercase: true
 *          veterinarian:
 *            #ref: '#/components/schemas/User'
 *          patient:
 *            #ref: '#/components/schemas/Patient'
 *          weightPatient:
 *            type: Number
 *          dateNextConsultation:
 *            type: Date
 *          vaccine:
 *            $ref: '#/components/schemas/Vaccine'
 *            
 */