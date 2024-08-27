const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const projectsRouter = require('./Routes/projects'); // Asegúrate de que esta ruta sea correcta
const usersRouter = require('./routes/users'); // Si tienes un archivo de rutas para usuarios

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

// Rutas para proyectos y usuarios
app.use('/api/projects', projectsRouter);
app.use('/api/users', usersRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
