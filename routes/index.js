const productsRouter = require('./products.router');

const routerApi = (app) => {
  app.use('/products', productsRouter);
};

module.exports = routerApi;
