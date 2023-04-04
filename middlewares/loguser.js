// Middleware para encriptar contraseñas
const loguserMiddleware = async (req, res, next) => {
  if(req.session.user){
    res.locals.user = req.session.user;
  }
  next();
};

module.exports = { loguserMiddleware };