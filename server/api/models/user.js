const db = require('mongoose');

const userSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = db.model('user', userSchema);