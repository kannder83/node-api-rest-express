const express = require('express');
const routerApi = require('./routes');
const app = express();
const {
  logErrors,
  errorHandler,
  boomErrorHandle,
} = require('./middlewares/error.handler');
const cors = require('cors');

const PORT = 3000;

app.use(express.json());

//limitar el acceso  a la aplicación
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not permit'));
    }
  },
};
//Se envia options a cors
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en express!');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandle);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Running in http://localhost:${PORT}`);
});
