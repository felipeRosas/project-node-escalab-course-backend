const express = require('express')
const router = express.Router()

const { create, update, getById, getByName, listAll, remove } = require('../controllers/typesOfVaccines')


/**
 * @swagger
 * /typeOfVaccine:
 *   post:
 *     summary: create a new type of vaccine
 *     tags: [TypeOfVaccine]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeOfVaccine'
 *     responses:
 *       200:
 *         description: typeOfVaccine created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TypeOfVaccine'
 *       400:
 *         description: bad request
 */
 router.post('/typeOfVaccine', create)

 /**
  * @swagger
  * /typeOfVaccine/{slug}:
  *   put:
  *     summary: update a type of vaccine
  *     tags: [TypeOfVaccine]
  *     parameters:
  *       - name: "slug"
  *         in: "path"
  *         description: "slug of type of vaccine"
  *         required: true
  *         type: "string"
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: "#/components/schemas/TypeOfVaccine"
  *     responses:
  *       200: 
  *         description: return a updated TypeOfVaccine
  *         content:
  *           application/json:
  *             schema:
  *               $ref: "#/components/schemas/TypeOfVaccine"
  *       400:
  *         description: bad request  
  */
 router.put('/typeOfVaccine/:slug', update)
 
 /**
  * @swagger
  * /typeOfVaccine/{_id}:
  *   get:
  *     tags: [TypeOfVaccine]
  *     summary: "get a TypeOfVaccine by id"
  *     parameters:
  *       - name: "_id"
  *         in: "path"
  *         description: "id of a TypeOfVaccine"
  *         required: true
  *         type: "string"
  *     responses:
  *       200:
  *         description: return a single TypeOfVaccine
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               items:
  *                 $ref: "#/components/schemas/TypeOfVaccine"
  *       400:
  *         description: bad request
  * 
  */
 router.get('/typeOfVaccine/:_id', getById)
 
 /**
  * @swagger
  * /typeOfVaccine/byName/{slug}:
  *   get:
  *     tags: [TypeOfVaccine]
  *     summary: "get TypeOfVaccine by name"
  *     parameters:
  *       - name: "slug"
  *         in: "path"
  *         description: "name of TypeOfVaccine"
  *         required: true
  *         type: "string"
  *     responses:
  *       200:
  *         description: returns TypeOfVaccine with the same name
  *         content:
  *           application/json:
  *             schema:
  *               type: array
  *               items:
  *                 $ref: "#/components/schemas/TypeOfVaccine"
  *       400:
  *         description: bad request
  * 
  */
 router.get('/typeOfVaccine/byName/:slug', getByName)
 
 /**
  * @swagger
  * /typeOfVaccine:
  *   get:
  *     tags: [TypeOfVaccine]
  *     summary: "get a list of all TypeOfVaccine"
  *     responses:
  *       200:
  *         description: return a list of TypeOfVaccine
  *         content:
  *           application/json:
  *             schema:
  *               type: array
  *               items:
  *                 $ref: "#/components/schemas/TypeOfVaccine"
  *       400:
  *         description: bad request
  * 
  */
 router.get('/typeOfVaccine', listAll)
 
  /**
  * @swagger
  * /typeOfVaccine/{slug}:
  *   delete:
  *     tags: [TypeOfVaccine]
  *     summary: "delete an specific TypeOfVaccine"
  *     description: "removes a TypeOfVaccine and returns this"
  *     parameters:
  *       - name: "slug"
  *         in: "path"
  *         description: "slug of TypeOfVaccine"
  *         required: true
  *         type: "string"
  *     responses:
  *       200:
  *         description: returns the deleted TypeOfVaccine
  *         schema:
  *           $ref: "#/components/schemas/TypeOfVaccine"
  * 
  */
 router.delete('/patients/:slug', remove)
 
 module.exports = router
 
 // SWAGGER SCHEMA
 /**
  *  @swagger
  *  components:
  *    schemas:
  *      TypeOfVaccine:
  *        type: object
  *        required:
  *          - name
  *          - description
  *          - specie
  *        properties:
  *          name:
  *            type: string
  *            minlength: 2
  *            maxlength: 32
  *          description:
  *            type: string
  *          specie:
  *            $ref: "#/components/schemas/Specie"
  *            
  */
