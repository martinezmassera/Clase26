const { normalize, schema } = require('normalizr')
const switchDao = require('../DAO')
const Daochat = switchDao()
const util = require('util');

function print(obj) {
    console.log(util.inspect(obj, false, 12, true));
}

function leer(){
    fs.readFile('../DB/db_chats.json')
}

const persona = new schema.Entity('persona')
const textoSchema = new schema.Entity('texto')
const msj = new schema.Entity('mensaje',{
    author: persona,
    texto: textoSchema
})

    const dataNormalized = normalize(Daochat.chat.getAll(), holdingSchema)
    print(dataNormalized)