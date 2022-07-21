const { Router } = require('express');
const express = require('express');
const switchDao = require('../DAO')

const router = Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const prodDao = switchDao()

router.get('/', async (req, res) => {
    const products = await prodDao.product.getAll()
    res.render('form', { products })
    // res.send(await prodDao.product.getAll())
});

router.post('/', async (req, res) => {
    res.send(await prodDao.product.add(req.body))
})

router.get('/:id?', async (req, res) => {
    const admin = req.headers.admin;
    const id = req.params.id;
    res.send(await prodDao.product.getByID(id));

});


router.put('/edit/:id', async (req, res) => {
    const newProd = req.body;
    const id = req.params.id;
    const admin = req.headers.admin;
    res.send(await prodDao.product.editById(newProd, id))
})

router.delete('/:id', async (req, res) => {
    res.send(await prodDao.product.deleteByID(id));
})

module.exports = router;
