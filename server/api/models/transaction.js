const db = require('mongoose');
const product = require('./product')
const user = require('./user');

const transactionSchema = new db.Schema({
    _id: db.Schema.Types.ObjectId,
    productID = {type: db.Schema.Types.ObjectId, ref: product},
    quantity: Number,
    status: Number,
    buyerID: {type: db.Schema.Types.ObjectId, ref: user},
    ownerID: {type: db.Schema.Types.ObjectId, ref: user}
});