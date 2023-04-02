const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const dataUsers = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(dataUsers, 'utf-8'));

const login = (req, res) => {
  res.render('login');
};

const formLogin = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    req.session.user = user;
    res.render('users', { user });
  } else {
    const errors = [{ msg: 'Credenciales inválidas.' }];
    res.render('login', { errors });
  }
};

module.exports = {
  login,
  formLogin,
};