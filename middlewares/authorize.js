const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
    //GET token from header
    //Authorization Bearer token
    let token = req.header('Authorization');
    if (!token) res.status(403).send('Access denied! No token available!');
    token = token.split(" ")[2].trim();

    //verify token
    try {
        const decoded = jwt.verify(token, process.env.mySecretKey);
        req.user = decoded;
        next();
    } catch (error) {
        //console.log(error.message);
        return res.status(403).send('Invalid token');
    }


}