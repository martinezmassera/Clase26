const contenedorMongo = require('../../container/mongo')
const Cart = require('../../model/cart')

class CartMongoDAO extends contenedorMongo {
    
    constructor() {
super('mongodb://localhost:27017/ecommerce', Cart)
    }

}

module.exports = CartMongoDAO