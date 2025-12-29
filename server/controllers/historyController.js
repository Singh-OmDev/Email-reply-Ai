const ReplyHistory = require('../models/ReplyHistory');

// @desc    Get user's reply history
// @route   GET /api/history
// @access  Private
const getHistory = async (req, res) => {
    try {
        const history = await ReplyHistory.find({ userId: req.user.id })
            .sort({ createdAt: -1 })
            .limit(20); // Limit to last 20 queries

        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch history' });
    }
};

module.exports = { getHistory };
