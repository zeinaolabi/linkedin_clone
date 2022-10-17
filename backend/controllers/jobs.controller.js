const Job = require('../models/jobs.model');
const User = require("../models/users.model");
const company_type = 1;
const user_type = 2;

const addJob = async (request, response) => {
    const {title, description, level, country, company} = request.body;

    const checkUserType = await User.findById(company);

    if(!checkUserType || checkUserType.user_type_id !== company_type) return response.status(404).json({message: "Invalid ID"});

    try{
        const job = new Job();
        job.title = title;
        job.description = description;
        job.level = level;
        job.country = country;
        job.company = company;

        await job.save();
        response.json(job)
    }catch(error){
        response.status(400).json({
            message: error.message
        })
    }
}

const searchForJob = async (request, response) => {
    const {title} = request.params;

    const jobs = await Job.find({title:{'$regex' : title , '$options' : 'i'}})

    if(jobs.length === 0) return response.status(200).json({message: "No jobs found"})

    return response.status(200).json(jobs);
}

const getAllJobs = async (request, response) => {
    const jobs = await Job.find().sort({"createdAt": "desc"});

    if(jobs.length === 0) return response.status(404).json({message: "No jobs found"})

    return response.status(200).json(jobs);
}

const appliedToJob = async (request, response) => {
    const {userID, jobID} = request.body;

    const checkUser = await User.findById(userID);
    if(!checkUser || checkUser.user_type_id !== user_type) return response.status(404).json({message: "Invalid User"});

    const checkJob = await Job.findById(jobID);
    if(!checkJob) return response.status(404).json({message: "Invalid Job"});

    const hasApplied = await Job.findOne({_id: jobID, "applied_to._id": userID});

    response.json(!!hasApplied);
}

const applyToJob = async (request, response) => {
    const {userID, jobID} = request.body;

    const checkUser = await User.findById(userID);
    if(!checkUser || checkUser.user_type_id !== user_type) return response.status(404).json({message: "Invalid User"});

    const checkJob = await Job.findById(jobID);
    if(!checkJob) return response.status(404).json({message: "Invalid Job"});

    const hasApplied = await Job.findOne({_id: jobID, "applied_to._id": userID});
    if(hasApplied) return response.status(404).json({message: "Already Applied"});

    checkJob.applied_to.push(userID);
    checkJob.save();

    response.json(checkJob);
}

const getJobNotification = async (request, response) => {
    const {userID} = request.params
    const followings = await User.findById(userID).select("follows._id");

    if(!followings) return response.status(404).json({message: "No Followed Companies"})

    const notifications = [];

    followings.follows.map( follow => {
        const companyNotifications = Notification.find({"company._id": follow._id})
        notifications.push(companyNotifications)
    })

    return response.status(200).json(notifications);
}

module.exports = {
    searchForJob,
    addJob,
    getAllJobs,
    applyToJob,
    appliedToJob,
    getJobNotification
}