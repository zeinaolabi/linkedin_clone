const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    description: {
        type: String,
        required: 'Description is required',
        trim: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;