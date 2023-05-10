// index.js
const express = require('express');
const app = express();

const usuariosRouter = require('./routes/usuarios');

app.use('/api/usuarios', usuariosRouter);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
