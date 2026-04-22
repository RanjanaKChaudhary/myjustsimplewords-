const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    //Get token from cookie
    const token = req.cookies.token;

    // No token
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request
    req.user = decoded;

    next(); // move to next route
    
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;