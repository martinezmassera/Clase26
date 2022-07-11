class ContenedorMemoria {

    constructor(archivo) {
        this.archivo = archivo;
        this.datos = []
        this.id = 0
        this.id_prod = 0
    }

    async getAll() {
        return this.datos
    }

    count() {
        const lastItem = this.datos[this.datos.length - 1];
        if (this.datos.length < 1) {
            this.id = 1
        } else {
            this.id = lastItem.id + 1
        }
        return this.id
    }

    async add(datos) {
        const id = this.count()
        datos['id'] = id;
        this.datos.push(datos)
        return datos
    }

    async deleteAll() {
        this.datos = []
    }

    async getByID(id) {
        const busqueda = this.datos.filter(dato => dato.id == id)
        return busqueda
    }

    async editById(datos, id) {
        datos['id'] = id
        const busqueda = this.datos.findIndex(dato => dato.id === id)
        this.datos.splice(busqueda, 1, datos)
    }

    async deleteByID(id) {
        const busqueda = this.datos.findIndex(dato => dato.id == id)
        this.datos.splice(busqueda, 1)
    }

    async addToCart(idCart, product) {
        const cart = this.datos.find(dato => dato.id == idCart)
        if (cart.products.length < 1) {
            this.id_prod = 1
        } else {
            this.id_prod++
        }
        cart.products.push(product)
    }

    async deleteProdInCart(idCart, idProd) {
        const buscaCart = this.datos.find(dato => dato.id == idCart)
        const prodIndex = buscaCart.products.findIndex(dato => dato.id == idProd)
        buscaCart.products.splice(prodIndex, 1)
    }
}

module.exports = ContenedorMemoria;