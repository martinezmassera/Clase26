
const router = require('express').Router();
const { faker } = require('@faker-js/faker');

router.get('/', (req, res) => {
    const products = []

    for (let i = 0; i < 5; i++) {
        products.push({
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            thumbnail: faker.image.food(1234, 2345, true)
        })
    }

    res.render('table', { products })
})
module.exports = router;