const { Router } = require('express');
const express = require('express');
const ProductosFileDAO = require('../DAO/products/productosFileDAO')
const ProductosMemoriaDAO = require('../DAO/products/productosMemoriaDAO')
const ProductosMongoDAO = require('../DAO/products/productosMongoDAO')

const router = Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const prodDao = new ProductosFileDAO()

router.get('/', async (req, res) => {
    res.send(await prodDao.getAll())
});

router.post('/', async (req, res) => {
    res.send(await prodDao.add(req.body))
})


router.get('/:id?', async (req, res) => {
    const admin = req.headers.admin;
    const id = req.params.id;
    res.send(await prodDao.getByID(id));

});


router.put('/edit/:id', async (req, res) => {
    const newProd = req.body;
    const id = req.params.id;
    const admin = req.headers.admin;
    res.send(await prodDao.editById(newProd, id))
})

router.delete('/:id', async (req, res) => {
    res.send(await prodDao.deleteByID(id));
})

module.exports = router;
