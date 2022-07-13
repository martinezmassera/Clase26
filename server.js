const express = require('express')


const app = express()
const PORT = process.env.PORT || 8080;
const cart = require('./router/cart_Router');
const prod = require('./router/products_router');

app.use('/carrito', cart);
app.use('/productos', prod);

app.use('*', (req, res) => {
    const rout = req.params[0];
    const method = req.method
    res.json({
        "error": -2,
        "descripción": 'ruta ' + rout + ' metodo ' + method + ' no implementada'
    })
});

app.listen(PORT, () => {
    console.log(`Servidor http en el puerto ${PORT}`)
});