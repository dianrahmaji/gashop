const express = require('express');
const db = require('mongoose');
const jwt = require('jsonwebtoken');
const auth = require('../auth');

const Transaction = require('../models/transaction');

const router = express.Router();

router.get('/', auth, (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');
    Transaction.find({ ownerID: db.Types.ObjectId(decoded.ownerID) }, (err, transaction) => {
        if(err) res.status(500).send(err);
        res.status(200).send(transaction);
    });
});


// Add edit status with router.put

module.exports = router;