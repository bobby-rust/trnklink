const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
// const SERVER_DOMAIN = process.env.SERVER_DOMAIN;
// const APP_DOMAIN = process.env.APP_DOMAIN;

// let middleware = require('../authcheck');
// router.use((req, res, next) => {
//     middleware.checkToken(req, res, next);
//   });

router.route("/register").post(async (req, res) => {
    const { email, username, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
  
    try {
      const userEmailExists = await User.findOne({ email: email });
      const usernameExists = await User.findOne({ username: username });
      if (userEmailExists) {
        return res.send({ success: false, message: "Email is already in use" });
      }
      await User.findOne({ username: username });
      if (usernameExists) {
        return res.send({ success: false, message: "Username is already in use" });
      }
      await User.create({
        email: email,
        username: username,
        password: encryptedPassword,
      });
  
  
      return res.send({
        success: true,
        message: "User created successfully.",
      });
    } catch (error) {
      return res.send({ success: false, message: "Error creating user" });
    }
  });
  
  router.route("/login").post(async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.send({ success: false, message: "User doesn't exist" });
    }
  
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email, username: user.username, _id: user._id }, JWT_SECRET, {
        expiresIn: "2h",
      });
  
      res.cookie("jwt", token, {
        maxAge: (2 * 60 * 60 * 1000), // 1 hour * 2
        httpOnly: true,
        secure: true,
      });
  
      if (res.status(200)) {
        return res.json({
          success: true,
          message: "User logged in.",
          token:token
        });
      } else {
        return res.json({ success: false, message: "Error logging in." });
      }
    }
  
    return res.json({ success: false, message: "Incorrect password." });
  });

module.exports = router;