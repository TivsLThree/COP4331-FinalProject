const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys")
const passport = require("passport")
// Load the Image model
const Image = require('../../models/Image')

require('../../config/passport')(passport);
router.post('/save',passport.authenticate("jwt", { session: false }), (req, res) => {
    const newImage = new Image({
        stringData: req.body.stringData,
        owner: req.body.owner,
    })

    newImage.save().then(image => res.json(image))
})

router.delete('/delete/:id', passport.authenticate("jwt", { session: false }), function(req, res, next) {

    Image.findByIdAndDelete(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/list', (req, res) => {
    // console.log(req.body)
    Image.find({owner : req.body.owner})
    .then( images => {
        res.json(images)
    })
    .catch(err=> console.log(err))
})



module.exports = router;
