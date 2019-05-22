const db = require('mongoose');
const cart = require('./cart');
const user = require('./user');
const product = require('./product');

const orderSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    cartID: {type: db.Schema.Types.ObjectId, ref: cart},
    productID: {type: db.Schema.Types.ObjectId, ref: product},
    ownerID: {type: db.Schema.Types.ObjectId, ref: user},
    customerID: {type: db.Schema.Types.ObjectId, ref: user},
    status: Number
});

module.exports = db.model('order', orderSchema);