const jwt = require("jsonwebtoken");
const User = require("../models/user");

// VERIFY PROTECTED ROUTE
const Verify =  async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ msg: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    
    res.status(200).json(user);
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports  = Verify


