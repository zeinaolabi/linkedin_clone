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
        trim: true
    },
    country: {
        type: String,
        required: 'Country is required',
        trim: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'Company is required',
        ref: 'User'
    },
    applied_to: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
}, {
    timestamps: true
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;