const { body, validationResult } = require('express-validator');

const validateRules = [
  body('username').isLength({ min: 5 }),
  body('password').isLength({ min: 8 }),
  body('email').isEmail(),
];

const validate = (req, res, next) => {
  validateRules.map(rule => rule(req, res, next));
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = validate;