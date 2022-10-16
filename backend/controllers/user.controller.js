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

    return !!hasFollowed;
}

module.exports = {
    followCompany,
    unfollowCompany,
    isFollowedCompany
}