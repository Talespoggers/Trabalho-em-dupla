const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'user' && password === 'password') {
    req.session.user = username;
    res.send('Login bem-sucedido!');
  } else {
    res.send('Credenciais inválidas');
  }
});


router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send('Erro ao fazer logout');
    }
    res.send('Logout bem-sucedido!');
  });
});

module.exports = router;
