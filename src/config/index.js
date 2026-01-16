const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Add other configuration as needed
  api: {
    prefix: '/api',
    version: 'v1'
  }
};

module.exports = config;
