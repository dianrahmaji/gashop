const express = require('express');
const db = require('mongoose');
const logger = require('morgan');

const users = require('./api/routes/users');
const products = require('./api/routes/products');
const carts = require('./api/routes/carts');

const app = express();

// Connect to MongoDB WzlHZCVYV1J5ldBv
db.connect('mongodb+srv://root:WzlHZCVYV1J5ldBv@gashop-bvqgh.mongodb.net/gashop?retryWrites=true', { useNewUrlParser: true });

// Middlewares
app.use('/images', express.static('server/images'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));

// Prevent CORS|| process.env.PORT Error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//Routes
app.use('/api', users);
app.use('/api/products', products);
app.use('/api/carts', carts);

// Error handlers
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            msg: error.message
        }
    });
});

app.listen(process.env.PORT, () => {
    console.log('Listening to port 3000');
});