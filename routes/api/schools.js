const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// load school model
let School = require("../../models/schools");
//
let User = require("../../models/users");

// @route GET api/schools
// @desc Get all the schools
// @access Public

router.get("/", (req, res) => {
  School.find()
    .then(School => res.json(School))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route GET api/schools/editschool
// @desc edit the schools
// @access Private

router.get(
  "/myschool",
  passport.authenticate("jwt-user", { session: false }),
  (req, res) => {
    const errors = {};
    School.findOne({ user: req.user.id })
      .then(school => {
        if (!school) {
          errors.noschool = "There is no school for this user";
          res.json(errors);
        }
        res.json(school);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;

// @route POST api/schools/editschool
// @desc add or edit the schools
// @access Private

router.post(
  "/editschool",
  passport.authenticate("jwt-user", { session: false }),
  (req, res) => {
    schoolFields = {};

    schoolFields.user = req.user.id;
    schoolFields.schoolName = req.body.schoolName;
    schoolFields.image = req.file.buffer.toString("base64");

    School.findOne({ user: req.user.id }).then(school => {
      if (school) {
        School.findOneAndUpdate(
          { user: req.user.id },
          { $set: schoolFields },
          { new: true }
        ).then(school => res.json(school));
      } else {
        new School(schoolFields).save().then(school => res.json(school));
      }
    });
  }
);

// @route POST api/schools/editcourse
// @desc edit the course
// @access Private

router.post(
  "/editcourse",
  passport.authenticate("jwt-user", { session: false }),
  (req, res) => {
    const newCourse = {};
    newCourse.class = req.body.class;

    if (req.body.maths) newCourse.maths = req.body.maths;
    if (req.body.english) newCourse.english = req.body.english;
    if (req.body.urdu) newCourse.urdu = req.body.urdu;
    if (req.body.sindhi) newCourse.sindhi = req.body.sindhi;
    if (req.body.islamiat) newCourse.islamiat = req.body.islamiat;
    if (req.body.computer) newCourse.computer = req.body.computer;
    if (req.body.physics) newCourse.physics = req.body.physics;
    if (req.body.chemistry) newCourse.chemistry = req.body.chemistry;
    if (req.body.biology) newCourse.biology = req.body.biology;
    if (req.body.science) newCourse.science = req.body.science;

    School.findOne({ user: req.user.id }).then(school => {
      if (school) {
        School.findOne({
          user: req.user.id,
          "books.class": req.body.class
        }).then(schools => {
          if (schools) {
            School.findOneAndUpdate(
              {
                user: req.user.id,
                "books.class": req.body.class
              },
              { $set: { "books.$": newCourse } },
              { new: true }
            )
              .then(updatedSchool => res.json(updatedSchool))
              .catch(err => res.json(err));
          } else {
            // add to books
            school.books.unshift(newCourse);
            // save to db
            school.save().then(school => res.json(school));
          }
        });
      }
    });
  }
);
