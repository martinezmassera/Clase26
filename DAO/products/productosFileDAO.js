const contenedorFile = require('../../container/file')

class ProductosFileDAO extends contenedorFile {

    constructor() {
        super('./DB/db_productos.json')
    }
  
}

module.exports = ProductosFileDAO