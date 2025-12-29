const express = require('express');
const router = express.Router();
const { syncUser } = require('../controllers/authController');
const { requireAuth } = require('../middleware/clerkAuth');

// Protected route to sync Clerk user with MongoDB
router.post('/sync', requireAuth, syncUser);

module.exports = router;
