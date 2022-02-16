const { check, param } = require('express-validator')

const { validateResult } = require('../helpers/validateHelper')

const validateCreatePatient = [

    check('name')
        .exists()
        .isString()
        .withMessage('name should be text')
        .not()
        .isEmpty()
        .withMessage('name is required')
        .isLength({ max:32 })
        .withMessage('name must be contain maximum 32 characters'),

    check('color')
        .isString()
        .withMessage('color should be text'),

    check('chipNumber')
        .isNumeric()
        .withMessage('chipNumber should be number')
        .not()
        .isEmpty()
        .withMessage('chipNumber is required'),

    check('dateOfBirth')
        .exists()
        .isDate(),

    (req, res, next) => {
        validateResult(req, res, next)
    }

]

const validateUpdatePatient = [

    param("_id").exists().withMessage("_id is required in params"),

    check('name')
        .exists()
        .isString()
        .withMessage('name should be text')
        .not()
        .isEmpty()
        .withMessage('name is required')
        .isLength({ max:32 })
        .withMessage('name must be contain maximum 32 characters'),

    check('color')
        .isString()
        .withMessage('color should be text'),

    check('chipNumber')
        .isNumeric()
        .withMessage('chipNumber should be number')
        .not()
        .isEmpty()
        .withMessage('chipNumber is required'),

    check('dateOfBirth')
        .exists()
        .not()
        .isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }

]


module.exports = { validateCreatePatient, validateUpdatePatient }