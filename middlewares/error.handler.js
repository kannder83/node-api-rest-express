/*
function logErrors (error,req,res,next){
    console.error(error);
    next(error);
}
*/

const logErrors = (err, req, res, next) => {
  console.log('logErrors');
  console.error(err);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

const boomErrorHandle = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
};

module.exports = { logErrors, errorHandler, boomErrorHandle };
