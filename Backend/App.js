// backend/app.js

const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./Routes/auth'); // Importa las rutas de autenticación
const db = require('./db'); // Importa el archivo de configuración de PostgreSQL

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api/auth', authRouter); // Rutas de autenticación en /api/auth

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
