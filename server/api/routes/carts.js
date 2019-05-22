const express = require('express');
const db = require('mongoose');
const jwt = require('jsonwebtoken');
const auth = require('../auth');

const Cart = require('../models/cart');
const router = express.Router();

router.post('/', auth, (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');

    const cart = new Cart({
        _id: new db.Types.ObjectId,
        customerID: db.Types.ObjectId(decoded.userID),
        productID: db.Types.ObjectId(req.body.productID),
        quantity: req.body.quantity,
        address: req.body.address,
        postalCode: req.body.postalCode,
        shippingMethod: req.body.shippingMethod
    });


    cart.save().then(res.status(200).json({msg: 'success'})).catch(error => {
        res.status(500).json({error});
        console.log(error);
    });
});

router.get('/', auth, (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');

    Cart.find({customerID: db.Types.ObjectId(decoded.userID)}).populate('productID').populate('customerID').exec().then(cart => {
        res.status(200).send(cart);
    })
});

module.exports = router;