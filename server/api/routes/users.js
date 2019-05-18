const express = require('express');
const db = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const router = express.Router();

router.post('/signup', (req, res, next) => {
    User.findOne({ email: req.body.email }).exec().then(user => {
        if(user) {
            return res.status(400).json({
                msg: 'User exist'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                        _id: new db.Schema.Types.ObjectId,
                        username: req.body.username,
                        email: req.body.email,
                        isAdmin: true,
                        password: hash
                    });

                    user.save().then(result => {
                        res.status(201).json({
                            msg: 'User created'
                        });
                    }).catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    });
                }
            });
        }
    });
});

router.post('/login', (req, res, next) => {
    User.findOne({ email: req.body.email }).exec().then(user => {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if(err) {
                return res.status(401).json({
                    msg: 'Auth failed'
                });
            }
            if(result) {
                const token = jwt.sign({
                    userID: user._id,
                    email: user.email,
                    isAdmin: user.isAdmin
                }, 'secret', {expiresIn: '1h'});

                return res.status(200).json({
                    msg: 'Auth successful',
                    token
                });
            }
            res.status(401).json({
                msg: 'Auth failed'
            });
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;