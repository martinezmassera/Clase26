const fs = require('fs');
const { normalize, schema } = require('normalizr')
 function leer() {
    const db = JSON.parse(fs.readFileSync('../DB/db_Chats.json'));
    return db
}


const persona = new schema.Entity('persona')
const textoSchema = new schema.Entity('texto')
const msj = new schema.Entity('mensaje', {
    author: persona,
    texto: textoSchema
})

const dataNormalized = normalize(leer(), [msj])
console.log(dataNormalized)

