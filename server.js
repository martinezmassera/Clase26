const express = require('express')


const app = express()
const cart = require('./router/cart_Router');
const prod = require('./router/products_router');

app.use('/carrito', cart);
app.use('/productos', prod);

app.listen(8080)