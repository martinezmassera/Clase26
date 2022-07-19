const contenedorMongo = require('../../container/mongo')
const Chat = require('../../model/chat')

class ChatMongoDAO extends contenedorMongo {
    
    constructor() {
super('mongodb://localhost:27017/ecommerce', Chat)
    }

}

module.exports = ChatMongoDAO