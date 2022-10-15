const jwt = require('jsonwebtoken');
const User = require('../Models/Users.model');

const authMiddleware = async (request, response, next) => {
    const token = request.headers.authorization.split(" ")[1];

    if(!token) return response.status(401).json({message: "Unauthorized"})

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({email: decoded.email}).lean()
        request.user = {...user, userType: 1};
        next()
    }
    catch(error){
        return response.status(401).json({message: "Unauthorized"})
    }
}

module.exports = authMiddleware;
