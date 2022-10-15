const User = require('../models/users.model');
const bcrypt = require('bcrypt');

const register = async (request, response)=>{
    const {email, password} = request.body;

    try{
        const user = new User();
        user.email = email;
        user.password = await bcrypt.hash(password, 10);

        await user.save();
        response.json(user)
    }catch(error){
        response.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    login,
    register
}