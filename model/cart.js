const mongoose = require('mongoose');

const Cart = mongoose.model(
    'Cart',
    new mongoose.Schema({
        products: [{
            title: String,
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now }
        }]
    }, {
        timestamps: { createdAt: true, updatedAt: true }
    })
);

module.exports = Cart;