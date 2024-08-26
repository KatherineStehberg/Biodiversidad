const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const projectsRouter = require('./Routes/projects'); // Ruta para proyectos
const usersRouter = require('./routes/users'); // Ruta para usuarios
const servicesRouter = require('./routes/services'); // Nueva ruta para servicios

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON y urlencoded
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor backend de Biodiversidad!');
});

// Rutas para proyectos, usuarios y servicios
app.use('/api/projects', projectsRouter);
app.use('/api/users', usersRouter);
app.use('/api/services', servicesRouter); // Nueva ruta para servicios

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
