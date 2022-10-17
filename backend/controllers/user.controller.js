const Job = require('../models/jobs.model');
const User = require("../models/users.model");
const company_type = 1;
const user_type = 2;

const followCompany = async (request, response) => {
    const {userID, companyID} = request.body;

    const user = await User.findById(userID);
    if(!user || user.user_type_id !== user_type) return response.status(404).json({message: "Invalid User"});

    const checkCompany = await User.findById(companyID);
    if(!checkCompany || checkCompany.user_type_id !== company_type) return response.status(404).json({message: "Invalid Company"});

    const hasFollowed = await User.findOne({_id: userID, "follows._id": companyID});
    if(hasFollowed) return response.status(404).json({message: "Already Followed"});

    user.follows.push(companyID);
    user.save();

    response.json(user);
}

const unfollowCompany = async (request, response) => {
    const {userID, companyID} = request.body;

    const user = await User.findById(userID);
    if(!user || user.user_type_id !== user_type) return response.status(404).json({message: "Invalid User"});

    const checkCompany = await User.findById(companyID);
    if(!checkCompany || checkCompany.user_type_id !== company_type) return response.status(404).json({message: "Invalid Company"});

    const hasFollowed = await User.findOne({_id: userID, "follows._id": companyID});
    if(!hasFollowed) return response.status(404).json({message: "Not Followed"});

    user.follows.pop(companyID);
    user.save();

    response.json(user);
}

const isFollowedCompany = async (request, response) => {
    const {userID, companyID} = request.body;

    const user = await User.findById(userID);
    if(!user || user.user_type_id !== user_type) return response.status(404).json({message: "Invalid User"});

    const checkCompany = await User.findById(companyID);
    if(!checkCompany || checkCompany.user_type_id !== company_type) return response.status(404).json({message: "Invalid Company"});

    const hasFollowed = await User.findOne({_id: userID, "follows._id": companyID});

    return response.json(!!hasFollowed);
}

const getUserProfile = async (request, response) => {
    const {userID} = request.params;

    const user = await User.findById(userID);

    if(!user) return response.status(404).json({message: "Invalid User"});

    response.status(200).json(user);
}

// const updateUser = async (request, response) => {
//     const {id, ...data} = request.body
//     const user = User.findById(id);
//
//     user.name = data.name != null ? data.name : user.name;
//     user.headline = data.headline != null ? data.headline : user.headline;
//     user.phone_number = data.phone_number != null ? data.phone_number : user.phone_number;
//     user.country = data.country != null ? data.country : user.country;
//     user.city = data.city != null ? data.city : user.city;
//
//
//
//     User.findByIdAndUpdate(id,{
//         name: data.name,
//         email: data.email,
//         gender: data.gender
//     })
//         .then((user)=>response.send(user))
//         .catch((err)=>response.status(400).send(err))
// }

module.exports = {
    followCompany,
    unfollowCompany,
    isFollowedCompany,
    // updateUser,
    getUserProfile
}