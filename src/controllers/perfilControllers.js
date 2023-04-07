const path = require('path');
const fs = require('fs');
const dataUsers = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(dataUsers, 'utf-8'));

const perfil = (req, res) => {
  const { email } = req.session.user;
  const user = users.find((user) => user.email === email);

  if (user) {
    res.render('perfil', { user });
  } else {
    res.redirect('/login');
  }
};

module.exports = {perfil};