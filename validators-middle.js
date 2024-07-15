const validate = (credentialSchema) => async (req, res, next) => {
    try {
        const parseBody = await credentialSchema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        res.status(400).json({message : "Enter valid email address"})
    }
};

module.exports = validate;