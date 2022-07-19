const express = require('express')
const http = require('http');
const { Server } = require("socket.io");
const switchDao = require('./DAO')

const app = express()
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);
const io = new Server(server);

const chatDao = switchDao()
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
    
})


app.get('/api/productos-test', async(req, res) => {
    const products = await  chatDao.product.getAll()
    res.render('table', { products })
})


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


io.on('connection', socket => {
    // INICIO PRODUCTOS
    socket.on('add', async (data) => {
        await contProd.addItem(data)
        io.sockets.emit('show', `new data`)
    })
    // // FIN PRODUCTOS

    // INICIO CHAT
    socket.on('new-message', async (newMessage) => {
        newMessage.time = new Date().toLocaleString();
        await chatDao.chat.add(newMessage)
        const leer = await chatDao.chat.getAll();
      
        io.sockets.emit('messages', dataNormalized);
    });
    // FIN CHAT

})
server.listen(PORT, () => {
    console.log('Running...')
})