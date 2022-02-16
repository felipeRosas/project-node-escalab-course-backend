const { check, param } = require('express-validator')

const { validateResult } = require('../helpers/validateHelper')

const validateCreateConsultation = [

    check('date')
        .exists()
        .isDate(),

    check('annotation')
        .exists()
        .isString()
        .withMessage('annotation should be text')
        .not()
        .isEmpty()
        .withMessage('annotation is required')
        .isLength({ max:2000 })
        .withMessage('annotation must be contain maximum 2000 characters'),

    check('weightPatient')
        .isNumeric()
        .withMessage('weightPatient should be number'),

    check('dateNextConsultation')
        .isDate(),

    check('veterinarian')
        .exists()
        .isString()
        .withMessage('veterinarian id is required'),

    check('patient')
        .exists()
        .isString()
        .withMessage('patient id is required'),
    

    (req, res, next) => {
        validateResult(req, res, next)
    }

]

const validateUpdateConsultation = [

    param("_id").exists().withMessage("_id is required in params"),

    check('date')
        .exists()
        .isDate(),

    check('annotation')
        .exists()
        .isString()
        .withMessage('annotation should be text')
        .not()
        .isEmpty()
        .withMessage('annotation is required')
        .isLength({ max:2000 })
        .withMessage('annotation must be contain maximum 2000 characters'),

    check('weightPatient')
        .isNumeric()
        .withMessage('weightPatient should be number'),

    check('dateNextConsultation')
        .isDate(),

    (req, res, next) => {
        validateResult(req, res, next)
    }

]


module.exports = { validateCreateConsultation, validateUpdateConsultation }