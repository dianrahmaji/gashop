const express = require('express');
const db = require('mongoose');
const jwt = require('jsonwebtoken');
const auth = require('../auth');

const Order = require('../models/order');
const Cart = require('../models/cart');

const router = express.Router();

router.post('/', auth, (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');
    
    const order = new Order({
        _id: new db.Types.ObjectId,
        cartID: req.body.cart._id,
        ownerID: req.body.cart.productID.ownerID,
        customerID: req.body.cart.customerID._id,
        productID: req.body.cart.productID._id,
        status: 1
    });
    order.save().then(() => {res.status(200).json({msg: 'success'}); console.log(order)}).catch(error => {
        res.status(500).json({error});
        console.log(error);
    });
    Cart.findByIdAndUpdate({_id: req.body.cartID}, {isCheckedOut: true}, {useFindAndModify: true} ,(err, res) => {
        console.log(res);
    })
});

router.get('/', auth, (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');

    Order.find({customerID: db.Types.ObjectId(decoded.userID)}).populate('ownerID').populate('customerID').populate('cartID').populate('productID').exec().then(order => {
        res.status(200).send(order);
    })
})

router.get('/admin', auth, (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');

    Order.find({ownerID: db.Types.ObjectId(decoded.userID)}).populate('ownerID').populate('customerID').populate('cartID').populate('productID').exec().then(order => {
        res.status(200).send(order);
    })
})

module.exports = router;