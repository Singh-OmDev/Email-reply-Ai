const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

const requireAuth = ClerkExpressRequireAuth({
    // Optional: Add options here if needed, e.g., onError
});

module.exports = { requireAuth };
