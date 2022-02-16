const admin = require("../firebase");
const User = require("../models/user");

// middleware validation

exports.authCheck = async (req, res, next) => {
  console.log(req.headers.authtoken);
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);

    console.log("FIREBASE USER IN AUTCHECK", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (error) {
    return res.status(401).json({
      error: "invalid or expired token",
      message: error.message,
    });
  }
};

exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;

  const adminUser = await User.findOne({ email }).exec();

  if (adminUser.role !== "admin") {
    res.status(403).json({
      err: "Admin resource. Access denied.",
    });
  } else {
    next();
  }
};

exports.vetarinarianCheck = async (req, res, next) => {
    const { email } = req.user;

    const adminUser = await User.findOne({ email }).exec();

    if (adminUser.role !== "veterinarian") {
        res.status(403).json({
        err: "Admin resource. Access denied.",
        });
    } else {
        next();
    }
};
