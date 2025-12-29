const User = require('../models/User');
const { clerkClient } = require('@clerk/clerk-sdk-node');

// @desc    Sync Clerk user with MongoDB and return user data (credits)
// @route   POST /api/auth/sync
// @access  Private (Clerk)
const syncUser = async (req, res) => {
    try {
        const { userId } = req.auth; // Clerk User ID from middleware

        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Check if user exists in MongoDB
        let user = await User.findOne({ clerkId: userId });

        if (!user) {
            // Fetch user details from Clerk to get email
            const clerkUser = await clerkClient.users.getUser(userId);
            const email = clerkUser.emailAddresses[0]?.emailAddress;

            if (!email) {
                return res.status(400).json({ message: 'Email required from Clerk user' });
            }

            // Create new MongoDB user
            user = await User.create({
                clerkId: userId,
                email: email,
                username: clerkUser.username || email.split('@')[0], // Fallback username
                credits: 20 // Default credits
            });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error syncing user:', error);
        res.status(500).json({ message: 'Server error syncing user' });
    }
};

module.exports = {
    syncUser,
};
