const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    // Legacy fields (optional now)
    credits: {
        type: Number,
        default: 20, // Default free credits
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
