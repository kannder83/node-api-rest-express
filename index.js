const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express!');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000,
  });
});

app.get('/categories', (req, res) => {
  res.json({
    name: 'Category 1',
    description: 'sport',
  });
});

app.listen(PORT, () => {
  console.log(`Running in http://localhost:${PORT}`);
});
