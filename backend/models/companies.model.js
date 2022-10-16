const mongoose = require('mongoose');

exports.companySchema = mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    bio: {
        type: String,
        required: true,
    },
    about: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    profile_picture: {
        type: String
    },
    cover_picture: {
        type: String
    },
    jobs: [{
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
        }
    }]
});

const Company = mongoose.model('Post', companySchema);

module.exports = Company;