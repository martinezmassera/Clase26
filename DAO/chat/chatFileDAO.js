const contenedorFile = require('../../container/file')

class ChatFileDAO extends contenedorFile {
    
    constructor() {
        super('./DB/db_Chats.json')
    }

}

module.exports = ChatFileDAO