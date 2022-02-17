const express = require('express')
const router = express.Router()
const { create, update, getById, getByName, listAll, remove } = require('../controllers/user')

// middlewares
const {
    authCheck,
    vetarinarianCheck
} = require("../middlewares/auth");

/**
 * @swagger
 * /users:
 *  post:
 *      summary: create a new user
 *      tags: [User]
 *      parameters:
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: user created
 *              content:
 *                  application/json:
 *                      schema:
 *                      $ref: '#/components/schemas/User'
 *          400:
 *              description: bad request
 */ 
router.post('/users',vetarinarianCheck, create)

/**
 * @swagger
 * /users/{_id}:
 *   put:
 *     summary: update a user
 *     tags: [User]
 *     parameters:
 *       - name: "_id"
 *         in: "path"
 *         description: "id of user"
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
 *             $ref: "#/components/schemas/User"
 *     responses:
 *       200: 
 *         description: return a updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       400:
 *         description: bad request  
 */
router.put('/users/:_id',vetarinarianCheck, update)

/**
 * @swagger
 * /users/{_id}:
 *   get:
 *     tags: [User]
 *     summary: "get a User by id"
 *     parameters:
 *       - name: "_id"
 *         in: "path"
 *         description: "id of a user"
 *         required: true
 *         type: "string"
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       200:
 *         description: return a single user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: "#/components/schemas/User"
 *       400:
 *         description: bad request
 * 
 */
router.get('/users/:_id',authCheck, getById)

/**
 * @swagger
 * /users/byName/{slug}:
 *   get:
 *     tags: [User]
 *     summary: "get users by name"
 *     parameters:
 *       - name: "slug"
 *         in: "path"
 *         description: "name of user"
 *         required: true
 *         type: "string"
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       200:
 *         description: returns users with the same name
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/User"
 *       400:
 *         description: bad request
 * 
 */
router.get('/users/byName/:slug',vetarinarianCheck, getByName)

/**
 * @swagger
 * /users:
 *   get:
 *     tags: [User]
 *     summary: "get a list of all users"
 *     parameters:
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       200:
 *         description: return a list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/User"
 *       400:
 *         description: bad request
 * 
 */
router.get('/users',vetarinarianCheck, listAll)

 /**
 * @swagger
 * /users/{slug}:
 *   delete:
 *     tags: [User]
 *     summary: "delete an specific user"
 *     description: "removes a user and returns this"
 *     parameters:
 *       - name: "slug"
 *         in: "path"
 *         description: "slug of user"
 *         required: true
 *         type: "string"
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       200:
 *         description: returns the deleted patient
 *         schema:
 *           $ref: "#/components/schemas/User"
 * 
 */
router.delete('/users/:slug',vetarinarianCheck, remove)

module.exports = router

// SWAGGER SCHEMA USER

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - name
 *              - lastName
 *              - rut
 *              - dateOFBirth
 *          properties:
 *              name:
 *                type: string
 *              lastName:
 *                type: string
 *              email:
 *                type: string
 *              userName:
 *                type: string
 *              slug:
 *                type: string
 *              role:
 *                type: string
 *                default: 'owner'
 *                enum:
 *                  - 'owner'
 *                  - 'veterinarian'
 *                  - 'admin'
 *              address:
 *                type: string
 *              rut:
 *                type: string
 *              dateOfBirth:
 *                type: date
 *              phone:
 *                type: number
 *                
 */