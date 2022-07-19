const mongoose = require('mongoose');

const Chat = mongoose.model(
    'Chat', 
    new mongoose.Schema({
        author: {
            id: String, 
            nombre: String, 
            apellido: String, 
            edad: Number, 
            alias: String,
            avatar: String
        },
        text: String,
        createdAt: { type: Date, default: Date.now },
    }, 
    {timestamp:true})
    );
 
module.exports = Chat;


