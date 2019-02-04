export default function errorHandler(err, req, res, next) {
  console.log('error', err);
  res.json({
    error: err,
    message: 'error',
    status: err.status,
    timestamp: new Date(),
  });
}
