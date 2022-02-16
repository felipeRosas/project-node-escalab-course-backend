const express = require('express')
const { create, update, getById, remove, getByPatient } = require('../controllers/vaccine')
const router = express.Router()

// middlewares
const {
    authCheck,
    adminCheck,
    vetarinarianCheck,
  } = require("../middlewares/auth");

/**
 * @swagger
 * /vaccine:
 *   post:
 *     summary: create a vaccine
 *     tags: [Vaccine]
 *     parameters:
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vaccine'
 *     responses:
 *       200:
 *         description: vaccine created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vaccine'
 *       400:
 *         description: bad request
 */
router.post('/vaccine', authCheck, vetarinarianCheck, create)

/**
 * @swagger
 * /vaccine/{_id}:
 *   put:
 *     summary: update a patient
 *     tags: [Patient]
 *     parameters:
 *       - name: "_id"
 *         in: "path"
 *         description: "id of vaccine"
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
 *             $ref: "#/components/schemas/Vaccine"
 *     responses:
 *       200: 
 *         description: return a updated Vaccine
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Vaccine"
 *       400:
 *         description: bad request  
 */
router.put('/vaccine/:_id', authCheck, vetarinarianCheck, update)

/**
 * @swagger
 * /vaccine/{_id}:
 *   get:
 *     summary: get a vaccine
 *     tags: [Vaccine]
 *     parameters:
 *       - name: "_id"
 *         in: "path"
 *         description: "id of vaccine"
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
 *             $ref: "#/components/schemas/Vaccine"
 *     responses:
 *       200: 
 *         description: return a Vaccine register
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Vaccine"
 *       400:
 *         description: bad request  
 */
router.get('/vaccine/:_id', authCheck, vetarinarianCheck, getById)

/**
 * @swagger
 * /vaccine/byPatient/{idPatient}:
 *   get:
 *     tags: [Vaccine]
 *     summary: "get vaccine registers by id patient"
 *     parameters:
 *       - name: "idPatient"
 *         in: "path"
 *         description: "id of patient"
 *         required: true
 *         type: "string"
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       200:
 *         description: returns a list of vaccines of a patient
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Vaccine"
 *       400:
 *         description: bad request
 * 
 */
router.get('/vaccine/byPatient/:idPatient',authCheck, vetarinarianCheck, getByPatient)

 /**
 * @swagger
 * /vaccine/{_id}:
 *   delete:
 *     tags: [Vaccine]
 *     summary: "delete an specific vaccine register"
 *     description: "removes a vaccine register and returns this"
 *     parameters:
 *       - name: "_id"
 *         in: "path"
 *         description: "id of vaccine"
 *         required: true
 *         type: "string"
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       200:
 *         description: returns the deleted vaccine register
 *         schema:
 *           $ref: "#/components/schemas/Vaccine"
 * 
 */
router.delete('/vaccine/_id',authCheck, vetarinarianCheck, remove)

module.exports = router

// SWAGGER SCHEMA
/**
 *  @swagger
 *  components:
 *    schemas:
 *      Vaccine:
 *        type: object
 *        required:
 *          - applicationDate
 *          - patient
 *          - typeOfVaccine
 *        properties:
 *          applicationDate:
 *            type: Date
 *            required: true
 *          patient:
 *            $ref: "#/components/schemas/Patient"
 *          typeOfVaccine:
 *            $ref: "#/components/schemas/TypeOfVaccine"
 *          nextApplication:
 *            type: Date
 *            
 */