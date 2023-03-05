const jwt = require("jsonwebtoken");

const User = require("../models/userModle");

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Autorization token required" });
  }

  // Bearer "dadafaeflghOegheogwegegegGe"

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id: id }).select("_id"); //await

    next();
  } catch (err) {
    res.status(401).json({ error: "token is not authorized" });
  }
};

module.exports = requireAuth;
