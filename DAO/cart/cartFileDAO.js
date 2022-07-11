const contenedorFile = require('../../container/file')

class CartFileDAO extends contenedorFile {
    
    constructor() {
        super('./DB/db_carts.json')
    }

}

module.exports = CartFileDAO