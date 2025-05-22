export function errorMiddleware(err, req, res, next) {
  console.error(err.stack); // Log error details for debugging

  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  res.status(err.statusCode).json({
    success: false,
    errorMessage: err.message
  });
}