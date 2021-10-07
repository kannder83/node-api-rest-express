const express = require('express');
const routerApi = require('./routes');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express!');
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros.');
  }
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
    name: 'Category 1',
    description: 'sport',
  });
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`Running in http://localhost:${PORT}`);
});
