const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

class ContenedorMongo {

    constructor(uri, model) {
        this.model = model
        this.mongo = mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
    }

    async add(obj) {
        const newProduct = new this.model(obj);
        await newProduct.save()

        return newProduct
    }

    async getByID(id) {
        return this.model.find({ _id: new ObjectId(id) })
    }

    async getAll() {
        return this.model.find({})
    }

    async editById(dato, id) {
        const nuevo = await this.model.updateOne(
            { _id: new ObjectId(id) },
            { $set: dato }
        )

        return nuevo
    }

    async deleteByID(id) {
        const userDelete = await this.model.deleteOne({ _id: new ObjectId(id) })
        return true
    }

    async addToCart(idCart, product) {
        const nuevo = await this.model.updateOne(
            { _id: new ObjectId(idCart) },
            { $addToSet: { products: product } })
        return product
    }

    async deleteProdInCart(idCart, idProd) {
        const userDelete = await this.model.find({ _id: new ObjectId(idCart) })
    console.log(userDelete)
        return true
    }

}


module.exports = ContenedorMongo;

