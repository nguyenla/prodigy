const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");

const bcrypt = require("bcryptjs");

const User = require("../../models/User");

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.get("/test", (req, res) => res.json("User works!"));

// @route GET api/users/register
// @desc Register new user
// @access Public
router.post("/register", (req, res) => {
    User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const avatar = gravatar.url(req.body.email, {
                s: "200", // size
                r: "pg", // rating
                d: "mm", // default
            });

            const new_user = new User({
                name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password,
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(new_user.password, salt, (err, hash) => {
                    if (err) throw err;
                    new_user.password = hash;
                    new_user
                        .save()
                        .then((user) => res.json(user))
                        .catch((err) => console.log(err));
                });
            });
        }
    });
});

module.exports = router;
