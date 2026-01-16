const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// Content routes
router.post('/', contentController.postContent);

module.exports = router;
