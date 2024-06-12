import { body, check, validationResult } from "express-validator";

export const createAdminValidation = [
    body('name')
        .exists({ checkFalsy: true })
        .withMessage('Name field is required')
        .isString()
        .withMessage('Name field must be a string'),
    body('email')
        .exists({ checkFalsy: true })
        .withMessage('Email field is required')
        .isString()
        .withMessage('Name field must be a string')
        .isEmail()
        .withMessage('Provide valid email'),
    body('password')
        .exists({ checkFalsy: true })
        .withMessage('Password field is required')
        .isLength({ min: 5 })
        .withMessage('Password should be at least 5 characters')
]

export const updateAdminValidation = [
    body('name')
        .optional()
        .isString()
        .withMessage('Name field must be a string'),
    body('email')
        .optional()
        .isString()
        .withMessage('Name field must be a string')
        .isEmail()
        .withMessage('Provide valid email'),
    body('password')
        .optional()
        .isLength({ min: 5 })
        .withMessage('Password should be at least 5 characters')
]

export const result = (req, res, next) => {
    const err = validationResult(req);

    if(!err.isEmpty()){
        return res.status(200).json({ errors: err.array() })
    }
    next()
}
