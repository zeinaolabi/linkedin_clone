const Job = require('../models/jobs.model');
const User = require("../models/users.model");
const company_type = 1;

const addJob = async (request, response)=> {
    const {title, description, level, country, company} = request.body;

    const checkUserType = await User.findById(company);

    if(checkUserType.user_type_id !== company_type) return response.status(404).json({message: "Invalid ID"});

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

const searchForJob = async (request, response)=> {
    const {title} = request.params;

    const job = await Job.find({title:{'$regex' : title , '$options' : 'i'}})

    if(job.length === 0) return response.status(200).json({message: "No jobs found"})

    return response.status(200).json(job);
}
module.exports = {
    searchForJob,
    addJob
}