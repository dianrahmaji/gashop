const db = require('mongoose');
const user = require('./user');
const product = require('./product');

const cartShema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    customerID: {type: db.Schema.Types.ObjectId, ref: user},
    productID: {type: db.Schema.Types.ObjectId, ref: product},
    quantity: Number,
    address: String,
    postalCode: Number,
    shippingMethod: Number
});

module.exports = db.model('cart', cartShema);