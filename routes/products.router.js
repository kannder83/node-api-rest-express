const express = require('express');

const ProductsService = require('../services/product.service');

const router = express.Router();

//Se crea la instancia del servicio:
const service = new ProductsService();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await service.findOne(id);
  res.json(products);
});

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
