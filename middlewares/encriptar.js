const bcrypt = require('bcryptjs');

// Middleware para encriptar contraseñas
const hashPasswordMiddleware = async (req, res, next) => {
  const { password } = req.body;
  if (password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
    } catch (error) {
      console.error(error);
      res.status(500).send('Error encriptando contraseña');
    }
  }
  next();
};

module.exports = { hashPasswordMiddleware };