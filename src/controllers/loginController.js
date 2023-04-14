const UserModel = require("../model/userModel.js");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const userLogin = (req, res) => {
    res.render('login');
  };

async function loginUser(req, res) {
  const { email, password } = req.body;

  try {

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    
    req.session.user = user;
    res.render('users', { user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
}

module.exports = { loginUser };