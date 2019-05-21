const db = require('mongoose');
const user = require('./user');

const productSchema = new db.Schema({
    _id: db.Schema.Types.ObjectId,
    name: String,
    imageURI: String,
    price: Number,
    stock: Number,
    ownerID: {type: db.Schema.Types.ObjectId, ref: user} 

});

module.exports = db.model('product', productSchema);