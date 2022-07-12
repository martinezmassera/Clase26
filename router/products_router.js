const { Router } = require('express');
const express = require('express');
const switchDao = require('../DAO')

const router = Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const prodDao = switchDao()

router.get('/', async (req, res) => {
    res.send(await prodDao.Prod.getAll())
});

router.post('/', async (req, res) => {
    res.send(await prodDao.Prod.add(req.body))
})


router.get('/:id?', async (req, res) => {
    const admin = req.headers.admin;
    const id = req.params.id;
    res.send(await prodDao.Prod.getByID(id));

});


router.put('/edit/:id', async (req, res) => {
    const newProd = req.body;
    const id = req.params.id;
    const admin = req.headers.admin;
    res.send(await prodDao.Prod.editById(newProd, id))
})

router.delete('/:id', async (req, res) => {
    res.send(await prodDao.Prod.deleteByID(id));
})

module.exports = router;
