// app.js
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const authRoutes = require('./routes/auth');
const isAuthenticated = require('./middleware/auth');

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'seu-segredo', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));


app.use(express.static(path.join(__dirname, 'public')));


app.use(authRoutes);


app.get('/protected', isAuthenticated, (req, res) => {
  res.send(`Bem-vindo à página protegida, ${req.session.user}!`);
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
