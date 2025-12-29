const mongoose = require('mongoose');

const replyHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    originalEmail: {
        type: String,
        required: true,
    },
    generatedReply: {
        type: String,
        required: true,
    },
    tone: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const ReplyHistory = mongoose.model('ReplyHistory', replyHistorySchema);
module.exports = ReplyHistory;
