const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/filter', (req, res) => {
  res.send('Soy un filtro');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 1',
    price: 3000,
  });
});

router.get('/', (req, res) => {
  const { size } = req.query;
  const products = [];
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

module.exports = router;
