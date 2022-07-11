const cartFileDAO =require('./cart/cartFileDAO')
const cartMemoriaeDAO =require('./cart/cartMemoriaDAO')
const cartMongoDAO =require('./cart/cartMongoDAO')
const productosFileDao =require('./products/productosFileDAO')
const productosMemoriaeDao =require('./products/productosMemoriaDAO')
const productosMongoDao =require('./products/productosMongoDAO')

const switchDao = (typeDB) =>{

    if(typeDB == 'memory') {
        console.log('Generate DAO with memory');
        return {
            cart: new cartMemoriaeDAO(),
            product: new productosMemoriaeDao()
        }
    } else if(typeDB == 'file') {
        console.log('Generate DAO with file');
        return {
            cart: new cartFileDAO(),
            product: new productosFileDao()
        }
    } else if(typeDB == 'mongo') {
        console.log('Generate DAO with mongo');
        return {
            cart: new cartMongoDAO(),
            product: new productosMongoDao()
        }
    }

    throw new Error('typeDB is not found')
}


module.exports = switchDao