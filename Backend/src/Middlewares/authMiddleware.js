const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV !== "PRODUCTION"){
    require('dotenv').config({
        path:"../config/.env"
    })
}
const authMiddleware = (req, res, next) => {
    const {token}= req.query;
    // console.log(token);
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }

    try {
        const verifyy = jwt.verify(token, process.env.JWT_SECRETKEY);
        req.user = verifyy;  
        req.userId=verifyy.id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
