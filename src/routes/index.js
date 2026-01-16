const express = require('express');
const router = express.Router();

// Import route modules
const userRoutes = require('./userRoutes');
const contentRoutes = require('./contentRoutes');

// Use route modules
router.use('/users', userRoutes);
router.use('/content', contentRoutes);

// Root API endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      content: '/api/content'
    }
  });
});

module.exports = router;
