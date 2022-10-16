const Job = require('../models/jobs.model');

const addJob = async (request, response)=> {
    const title = request.body;

    return response.json(title);

    // const user = await Job.findOne({email}).select("+password");
}

const searchForJob = async (request, response)=> {
    const title = request.body;

    return response.json(title);

    // const user = await Job.findOne({email}).select("+password");
}
module.exports = {
    searchForJob,
    addJob
}