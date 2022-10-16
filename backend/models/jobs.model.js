const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is required',
        trim: true
    },
    description: {
        type: String,
        required: 'Description is required',
        unique: true,
        trim: true
    },
    level: {
        type: String
    },
    country: {
        type: String,
        trim: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;