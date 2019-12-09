const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys")

// Load the User model
const User = require('../../models/User')

// TODO: Load input validation





// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
    // const { errors, isValid } = validateRegisterInput(req.body);

    // Check Validation:
    // if(!isValid) {
    //   return res.status(400).json(errors);
    // }

    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email Already exists" });
      } else {
        const newUser = new User({
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => res.json(user)).catch(err => console.log(err));
          });
        });

        //newUser.save().then(user => res.json(user)).catch(err => console.log(err))

      }
    })
  });


// @route   GET api/users/login
// @desc    Login User/ Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
    // TODO:
    // const { errors, isValid } = validateLoginInput(req.body);
    // // Check Validation:
    // if(!isValid) {
    //   return res.status(400).json(errors);
    // }

    const email = req.body.email;
    const passwordAttempt = req.body.password;

    //find user by email:
    User.findOne({ email: email }).then(user => {
      // check for user
      if (!user) {
        // TODO
        // errors.email= "User Not Found";
        // return res.status(404).json(errors);
        return res.status(404).json({ emailFound: "false" })
      }
      else {
          bcrypt.compare(passwordAttempt, user.password).then(isMatch => {

            if (isMatch) {

                const payload = { id: user.id, email: user.email }

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token,
                      id: user.id
                    });
                  });

                  console.log("We in here!")
                //return res.status(200).json({ signInSuccess: "true" })
            }
            else {







                return res.status(400).json( {signedInSuccess: "false"})
            }



          })
          .catch(err=> console.log(err))
      }
    //   else if (passwordAttempt != user.password) {
    //       return res.status(400).json({ passwordCorrect: "false" })
    //   }
    //   else {
    //       return res.status(200).json({ loginSuccess: "true" })
    //   }
      // Check Password
      // TODO:
    //   bcrypt.compare(passwordAttempt, user.password).then(isMatch => {
    //     if (isMatch) {

    //       // If User matched
    //       const payload = { id: user.id, name: user.name, avatar: user.avatar } // create JWT Payload

    //       //Sign Token
    //       jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
    //         res.json({
    //           success: true,
    //           token: "Bearer " + token,
    //           id: user.id
    //         });
    //       });

    //     } else {
    //       // TODO
    //     //   errors.password = "Password Incorrect";
    //     //   return res.status(400).json(errors);
    //       return res.status(400).json({ passwordIncorrect: "true" })
    //     }
    //   }).catch(err => console.log(err))
    });
  });



module.exports = router;
