const contenedorMongo = require('../../container/mongo')
const Prod = require('../../model/productos')

class ProductosMongoDAO extends contenedorMongo {
    
    constructor() {
   super('mongodb://localhost:27017/ecommerce', Prod)
    }

}

module.exports = ProductosMongoDAO