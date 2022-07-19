const cartFileDAO = require('./cart/cartFileDAO')
const cartMemoriaeDAO = require('./cart/cartMemoriaDAO')
const chatMongoDAO = require('./chat/chatMongoDAO')
const chatFileDAO = require('./chat/chatFileDAO')
const chatMemoriaeDAO = require('./chat/chatMemoriaDAO')
const cartMongoDAO = require('./cart/cartMongoDAO')
const productosFileDao = require('./products/productosFileDAO')
const productosMemoriaeDao = require('./products/productosMemoriaDAO')
const productosMongoDao = require('./products/productosMongoDAO')

if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const switchDao = () => {
    const TYPEDB = process.env.TYPEDB
    switch (process.env.TYPEDB) {
        case 'mongo':
            console.log('Mongo')
            return {
                cart: new cartMongoDAO(),
                chat: new chatMongoDAO(),
                product: new productosMongoDao()
            }
        case 'file':
            console.log('Archivo')
            return {
                cart: new cartFileDAO(),
                chat: new chatFileDAO(),
                product: new productosFileDao()
            }
        case 'memory':
             console.log('Memoria')
            return {
                cart: new cartMemoriaeDAO(),
                chat: new chatMemoriaeDAO(),
                product: new productosMemoriaeDao()
            }
    }
   

    throw new Error('Error')}


module.exports = switchDao