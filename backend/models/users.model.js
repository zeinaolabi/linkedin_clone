const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'Email is required',
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'Password is required',
        select: false
    },
    first_name: {
        type: String,
        trim: true
    },
    last_name: {
        type: String,
        trim: true
    },
    headline: {
        type: String,
        trim: true
    },
    phone_number: {
        type: Number,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    company_name: {
        type: String,
        trim: true
    },
    company_about: {
        type: String,
        trim: true
    },
    user_type_id: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;