const { Router } = require('express');
const express = require('express');
const switchDao = require('../DAO')

const router = Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

const cartDao = switchDao('mongo')

router.get('/', async (req, res) => {
    res.send(await cartDao.cart.getAll())
})

router.post('/', async (req, res) => {
    res.send(await cartDao.cart.add(req.body))

})

router.delete('/:id', async (req, res) => {
    res.send(await cartDao.cart.deleteByID(req.params.id))

})

router.delete('/:id/products/:id_prod', async (req, res) => {
    const idCart = req.params.id
    const idProd = req.params.id_prod
    res.send(await cartDao.cart.deleteProdInCart(idCart, idProd))
})

router.post('/:id/products', async (req, res) => {
    const idCart = req.params.id
    const idProduct = req.body
    let results = cartDao.cart.addToCart(idCart, idProduct)

    return res.send(results)
})

module.exports = router;
