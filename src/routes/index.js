const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const contentRoutes = require('./contentRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/users', userRoutes);
router.use('/content', contentRoutes);
router.use('/profile', profileRoutes);


router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      content: '/api/content',
      profile: '/api/profile'
    }
  });
});

module.exports = router;
