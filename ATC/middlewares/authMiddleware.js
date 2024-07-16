// middlewares/authMiddleware.js

const authMiddleware = (req, res, next) => {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
      // If authenticated, continue to the next middleware/route handler
      return next();
    }
  
    // If not authenticated, redirect to login page or send 401 Unauthorized response
    res.status(401).json({ status: 'fail', message: 'Unauthorized' });
  };
  
  module.exports = authMiddleware;
  