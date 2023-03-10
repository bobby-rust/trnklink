const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let User = require("../models/users.model");
require("dotenv").config();

// const JWT_SECRET = process.env.JWT_SECRET;
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
      if (userEmailExists) {
        return res.send({ success: false, message: "Email is already in use." });
      }
      const usernameExists = await User.findOne({ username: username });
      if (userEmausernameExistsilExists) {
        return res.send({ success: false, message: "Username is already in use." });
      }
      await User.create({
        email: email,
        username: username,
        password: encryptedPassword,
      });
  
  
      return res.send({
        success: true,
        message: "User Registered Successfully.",
      });
    } catch (error) {
      return res.send({ success: false, message: "Error Registering User." });
    }
  });
  
  router.route("/login").post(async (req, res) => {
    const { email, password } = req.body;
  
    const user = null;

    if(email.includes("@")){
        user = await User.findOne({ email: email });
    } else {
        user = await User.findOne({ username: email });
    }

    if (!user) {
      return res.send({ success: false, message: "User doesn't exist." });
    }
  
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: email, _id: user._id }, JWT_SECRET, {
        expiresIn: "172d",
      });
  
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 500000),
        httpOnly: false,
        secure: false,
      });
  
      if (res.status(200)) {
        return res.json({
          success: true,
          message: "User Logged In Successfully.",
        });
      } else {
        return res.json({ success: false, message: "Error Logging In." });
      }
    }
  
    return res.json({ success: false, message: "Wrong password." });
  });