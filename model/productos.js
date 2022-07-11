const mongoose = require('mongoose');

const Prod = mongoose.model(
    'Prod', 
    new mongoose.Schema({
        name: String,
        description: String,
        code: String,
        img: String,
        price: Number,
        stock: Number,
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    }, 
    {timestamp:true})
    );
 
module.exports = Prod;


