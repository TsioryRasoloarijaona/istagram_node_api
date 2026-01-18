const express = require('express');
const router = express.Router();
const profilPostController = require('../controllers/profilPost.controller');

// Profile routes
router.get('/posts/:username', profilPostController.runScraper);

module.exports = router;

