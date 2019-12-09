const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys")

// Load the Image model
const Image = require('../../models/Image')


router.post('/save', (req, res) => {
    const newImage = new Image({
        stringData: req.body.stringData,
        owner: req.body.owner,
    })

    newImage.save().then(image => res.json(image))
})

router.post('/list', (req, res) => {
    // console.log(req.body)
    Image.find({owner : req.body.owner})
    .then( images => {
        res.json(images)
    })
    .catch(err=> console.log(err))
})



module.exports = router;