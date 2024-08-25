// backend/app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/auth'); // Importa las rutas de autenticación
const pageRouter = require('./routes/pages'); // Importa las rutas de páginas
const projectRouter = require('./Routes/projects'); // Importa las rutas de proyectos
const db = require('./database/bd'); // Importa el archivo de configuración de PostgreSQL

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Permite peticiones desde el frontend
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api/auth', authRouter); // Rutas de autenticación en /api/auth
app.use('/api/pages', pageRouter); // Rutas para manejar páginas en /api/pages
app.use('/api/projects', projectRouter); // Rutas para proyectos en /api/projects

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

module.exports = app;
