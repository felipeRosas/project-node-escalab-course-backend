const express = require('express')
const router = express.Router()

const { create, update, remove, getByPatient, getById} = require('../controllers/consultation')

// middlewares
const {
    authCheck,
    vetarinarianCheck,
  } = require("../middlewares/auth");

  //validations
const { validateCreateConsultation, validateUpdateConsultation } = require('../validations/consultation')

/**
 * @swagger
 * /consultation:
 *   post:
 *     summary: create a new consultation register
 *     tags: [Consultation]
 *     parameters:
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
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
router.post('/consultation',authCheck, vetarinarianCheck,validateCreateConsultation, create)

/**
 * @swagger
 * /consultation/byPatient/{idPatient}:
 *   get:
 *     tags: [Consultation]
 *     summary: "get a list of all consultations of a patient"
 *     parameters:
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
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
router.get('/consultation/byPatient/:idPatient',authCheck, vetarinarianCheck, getByPatient)

/**
 * @swagger
 * /consultation/_id:
 *   get:
 *     tags: [Consultation]
 *     summary: "get a consultations by id"
 *     parameters:
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
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
router.get('/consultation/:_id',authCheck, vetarinarianCheck, getById)

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
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
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
router.put('/consultation/:_id',authCheck, vetarinarianCheck,validateUpdateConsultation, update)

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
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       200:
 *         description: returns the deleted consultation
 *         schema:
 *           $ref: "#/components/schemas/Consultation"
 * 
 */
router.delete('/consultation/:_id',authCheck, vetarinarianCheck, remove)


module.exports = router

// SWAGGER SCHEMA
/**
 *  @swagger
 *  components:
 *    schemas:
 *      Consultation:
 *        type: object
 *        required:
 *          - date
 *          - annotation
 *        properties:
 *          date:
 *            type: Date
 *            required: true
 *          annotation:
 *            type: string
 *            lowercase: true
 *          weightPatient:
 *            type: Number
 *          dateNextConsultation:
 *            type: Date
 *          veterinarian:
 *            $ref: '#/components/schemas/User'
 *          patient:
 *            $ref: '#/components/schemas/Patient'
 *          vaccine:
 *            $ref: '#/components/schemas/Vaccine'
 *            
 */