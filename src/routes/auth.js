const express = require("express");
const router = express.Router();

// middlewares
const {
  authCheck,
  adminCheck,
  vetarinarianCheck,
} = require("../middlewares/auth");

// controllers
const { createOrUpdateUser, currentUser } = require("../controllers/auth");

/**
 * @swagger
 * schemes:
 *   - "https"
 *   - "http"
 * /create-or-update-user:
 *   post:
 *     summary: Create or Update User with Firebase Auth
 *     tags:
 *       - Auth
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *      "200":
 *         description: User Information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *      "401":
 *         description: Invalid or expired token
 */
router.post("/create-or-update-user", authCheck, createOrUpdateUser);

/**
 * @swagger
 * schemes:
 *   - "https"
 *   - "http"
 * /current-user:
 *   post:
 *     summary: Get current user with Firebase Auth token
 *     tags:
 *       - Auth
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       "200":
 *         description: User Information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       "401":
 *         description: Invalid or expired token
 */
router.post("/current-user", authCheck, currentUser);

/**
 * @swagger
 * schemes:
 *   - "https"
 *   - "http"
 * /current-admin:
 *   post:
 *     summary: check the user role, if it is admin, with Firebase Auth token
 *     tags:
 *       - Auth
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       "200":
 *         description: User Information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       "401":
 *         description: Invalid or expired token
 */
router.post("/current-admin", authCheck, adminCheck, currentUser);

/**
 * @swagger
 * schemes:
 *   - "https"
 *   - "http"
 * /current-veterinarian:
 *   post:
 *     summary: check the user role, if it is veterinarian, with Firebase Auth token
 *     tags:
 *       - Auth
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - name: authtoken
 *         in: header
 *         description: an authorization token JWT-ouath2
 *     responses:
 *       "200":
 *         description: User Information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       "401":
 *         description: Invalid or expired token
 */
router.post("/current-veterinarian", authCheck, vetarinarianCheck, currentUser);

module.exports = router;
