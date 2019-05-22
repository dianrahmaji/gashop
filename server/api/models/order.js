const db = require('mongoose');
const cart = require('./cart');

const orderSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    cartID: {type: db.Schema.Types.ObjectId, ref: cart},
    status: Number
});

module.exports = db.model('order', orderSchema);