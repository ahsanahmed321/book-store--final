const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("../../config/key");
const passport = require("passport");

//load user validation
const validateUserRegister = require("../../validation/register");
const validateUserLogin = require("../../validation/login");
// load user model
const User = require("../../models/users");

router.get("/test", (req, res) => res.json({ msg: "Users Work" }));

//@route   POST api/users/register
//@desc    Register User
//@access  Public
router.post("/register", (req, res) => {
  // validating
  const { errors, isValid } = validateUserRegister(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exist";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      const newUser = User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//@route   POST api/users/login
//@desc    login User
//@access  Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateUserLogin(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //user matched
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar
        };

        //sign token
        jwt.sign(
          payload,
          key.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

//@route   GET api/users/current
//@desc    get current logged in user
//@access  Private

router.get(
  "/current",
  passport.authenticate("jwt-user", { session: false }, (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  })
);

module.exports = router;
