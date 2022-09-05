export default function methodNotAllowed(req, res, next) {
  next({
    status: 400,
    message: `${req.method} not allowed for ${req.originalUrl}`
  })
}