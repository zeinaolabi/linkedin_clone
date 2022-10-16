const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (request, response)=> {
    const {email, password} = request.body;

    const user = await User.findOne({email}).select("+password");

    if(!user) return response.status(404).json({ message: "Invalid Email"});

    bcrypt.compare(password, user.password, (error, isValid) =>{
        if (error) return response.status(404).json({message: error});
        if (!isValid) return response.status(404).json({message: 'Invalid Password'});

        const token = jwt.sign({email: user.email}, process.env.JWT_SECRET_KEY, {
            expiresIn: '360h'
        });

        response.status(200).json({user: user, token: token});
    });
}

const register = async (request, response)=>{
    const {email, password, user_type_id} = request.body;

    const user = await User.findOne({email});

    if(user) return response.status(404).json({message: "Used Email"});

    try{
        const user = new User();
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        user.user_type_id = user_type_id;

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