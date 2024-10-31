// middleware/auth.js
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
      next(); // Usuário autenticado
    } else {
      res.status(401).send('Você não está autorizado a acessar esta página');
    }
  };
  
  module.exports = isAuthenticated;
  