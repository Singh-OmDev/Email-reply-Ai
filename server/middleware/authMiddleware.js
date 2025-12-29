const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');
const User = require('../models/User');

// 1. Verify Clerk Token
const clerkAuth = ClerkExpressRequireAuth();

// 2. Attach MongoDB User
const attachUser = async (req, res, next) => {
    try {
        // req.auth is populated by ClerkExpressRequireAuth
        if (!req.auth || !req.auth.userId) {
            return res.status(401).json({ message: 'Unauthorized: No Clerk session' });
        }

        const user = await User.findOne({ clerkId: req.auth.userId });

        if (!user) {
            return res.status(401).json({ message: 'User not registered in database. Please refresh or sign in again.' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Auth Middleware Error:', error);
        res.status(500).json({ message: 'Server Error in Auth' });
    }
};

// Export 'protect' as an array of middleware
const protect = [clerkAuth, attachUser];

module.exports = { protect };
