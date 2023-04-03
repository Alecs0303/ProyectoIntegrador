const path = require('path');
const fs = require('fs');
const dataUsers = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(dataUsers, 'utf-8'));
const bcrypt = require('bcryptjs');

const login = (req, res) => {
  res.render('login');
};

const formLogin = async (req, res) => {

  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(400).send('Usuario no encontrado');
  }

  try {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      // La contraseña coincide, inicia sesión y redirige al usuario
      // (aquí debes implementar la lógica de inicio de sesión, como guardar el usuario en la sesión)
      req.session.user = user;
      res.render('users', { user });
    } else {
      res.status(400).send('Contraseña incorrecta');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al verificar la contraseña');
  }


};

module.exports = {
  login,
  formLogin,
};