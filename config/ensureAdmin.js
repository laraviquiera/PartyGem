module.exports = function(req, res, next) {
    // use status code of 401 unauthorized
    if (!req.user.admin) return res.status(401).json('Unauthorized');
    // A okay
    next();
};