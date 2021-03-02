exports.createAccountValidator = (req, res, next) => {
    req.check('username', "username required").notEmpty();
    req.check('username', "username must be between 3 and 25 characters").isLength({
        min: 3,
        max: 25
    });
    req.check('password', "password required").notEmpty();
    req.check('password', "password must be at least 8 characters").isLength({
        min: 8,
        max: 45
    });
    // check for any other error
    const errors = req.validationErrors();
    if(errors) {
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    // continue to next middleware
    next();
}