const express = require('express')
const router = express.Router()

const { create, update, getById, getByName,listAll, remove} = require('../controllers/patient')

// middlewares
const {
    authCheck,
    vetarinarianCheck,
  } = require("../middlewares/auth");

//validations
const { validateCreatePatient, validateUpdatePatient } = require('../validations/patient')

/**
 * @swagger
 * /patients:
 *   post:
 *     summary: create a patient record
 *     tags: [Patient]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       200:
 *         description: patient created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patient'
 *       400:
 *         description: bad request
 */
router.post('/patients',authCheck, vetarinarianCheck,validateCreatePatient, create)

/**
 * @swagger
 * /patients/{_id}:
 *   put:
 *     summary: update a patient
 *     tags: [Patient]
 *     parameters:
 *       - name: "_id"
 *         in: "path"
 *         description: "id of patient"
 *         required: true
 *         type: "string"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Patient"
 *     responses:
 *       200: 
 *         description: return a updated patient
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Patient"
 *       400:
 *         description: bad request  
 */
router.put('/patients/:_id',authCheck, vetarinarianCheck, update)

/**
 * @swagger
 * /patients/{_id}:
 *   get:
 *     tags: [Patient]
 *     summary: "get a Patient by id"
 *     parameters:
 *       - name: "_id"
 *         in: "path"
 *         description: "id of a patient"
 *         required: true
 *         type: "string"
 *     responses:
 *       200:
 *         description: return a single patient
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: "#/components/schemas/Patient"
 *       400:
 *         description: bad request
 * 
 */
router.get('/patients/:_id',authCheck, vetarinarianCheck, getById)

/**
 * @swagger
 * /patients/byName/{name}:
 *   get:
 *     tags: [Patient]
 *     summary: "get patients by name"
 *     parameters:
 *       - name: "name"
 *         in: "path"
 *         description: "name of patient"
 *         required: true
 *         type: "string"
 *     responses:
 *       200:
 *         description: returns patients with the same name
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Patient"
 *       400:
 *         description: bad request
 * 
 */
router.get('/patient/byName/:name',authCheck, vetarinarianCheck, getByName)

/**
 * @swagger
 * /patients:
 *   get:
 *     tags: [Patient]
 *     summary: "get a list of all patients"
 *     responses:
 *       200:
 *         description: return a list of patients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Patient"
 *       400:
 *         description: bad request
 * 
 */
router.get('/patients',authCheck, vetarinarianCheck, listAll)

 /**
 * @swagger
 * /patients/{_id}:
 *   delete:
 *     tags: [Patient]
 *     summary: "delete an specific patient"
 *     description: "removes a patient and returns this"
 *     parameters:
 *       - name: "_id"
 *         in: "path"
 *         description: "id of patient"
 *         required: true
 *         type: "string"
 *     responses:
 *       200:
 *         description: returns the deleted patient
 *         schema:
 *           $ref: "#/components/schemas/Patient"
 * 
 */
router.delete('/patients/:_id',authCheck, vetarinarianCheck, remove)

module.exports = router

// SWAGGER SCHEMA
/**
 *  @swagger
 *  components:
 *    schemas:
 *      Patient:
 *        type: object
 *        required:
 *          - name
 *          - race
 *          - owner
 *          - chipNumber
 *        properties:
 *          name:
 *            type: string
 *            trim: true
 *            minlength: 2
 *            maxlength: 32
 *          color:
 *            type: string
 *            lowercase: true
 *          chipNumber:
 *            type: Number
 *          dateOfBirth:
 *            type: Date
 *          owner:
 *            $ref: "#/components/schemas/User"
 *          Race:
 *            $ref: "#/components/schemas/Race"
 *            
 */