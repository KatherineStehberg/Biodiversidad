// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000; // Puerto donde se ejecutará el servidor

// Middleware para parsear JSON y urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Datos de ejemplo (simulación de una base de datos)
let projects = [
  { id: 1, title: 'Proyecto A' },
  { id: 2, title: 'Proyecto B' },
  // Más proyectos...
];

let users = [
  { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
  { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
  // Más usuarios...
];

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor backend de Biodiversidad!');
});

// Rutas para proyectos y usuarios
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

