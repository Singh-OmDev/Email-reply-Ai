const express = require('express');
const router = express.Router();
const { generateReply } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, generateReply);

module.exports = router;
