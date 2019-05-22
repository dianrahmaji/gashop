const express = require('express');
const db = require('mongoose');
const jwt = require('jsonwebtoken');
const auth = require('../auth');
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function(req, file, cb) {
//         cb(null, new Date().toISOString + file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// const upload = multer({ storage, limits: {
//     fileSize: 1024 * 1024 * 5
// }, fileFilter });

const Product = require('../models/product');

const router = express.Router();

router.get('/', (req, res, next) => {
    Product.find({}, (err, product) => {
        res.status(200).send(product);
    });
});

router.get('/me', auth, (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');
    console.log(decoded);
    Product.find({ ownerID: db.Types.ObjectId(decoded.userID) }, (err, product) => {
        res.status(200).send(product);
        console.log(product);
    });
});

router.get('/:id', (req, res, next) => {
    Product.find({_id: req.params.id}, (err, product) => {
        res.status(200).send(product);
    });
});

router.post('/', auth, (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');
    console.log(decoded);
    const product = new Product({
        _id: new db.Types.ObjectId,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        imageURL: req.body.imageURL,
        ownerID: db.Types.ObjectId(decoded.userID)
    });

    product.save().then(res.status(200).json({msg: 'success'})).catch(error => {
        res.status(500).json({error});
        console.log(error);
    });
});

module.exports = router;