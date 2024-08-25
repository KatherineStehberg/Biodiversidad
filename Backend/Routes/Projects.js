// backend/routes/projects.js

const express = require('express');
const router = express.Router();
const db = require('../database/bd'); // Importa el archivo de configuración de PostgreSQL

// Obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM projects');
    res.json({
      success: true,
      projects: rows
    });
  } catch (err) {
    console.error('Error al obtener los proyectos:', err.message);
    res.status(500).json({ success: false, message: 'Error al obtener los proyectos' });
  }
});

// Agregar un nuevo proyecto
router.post('/', async (req, res) => {
  const { title, description } = req.body;

  // Validación básica
  if (!title || !description) {
    return res.status(400).json({ success: false, message: 'El título y la descripción son obligatorios' });
  }

  try {
    const { rows } = await db.query(
      'INSERT INTO projects (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    res.status(201).json({
      success: true,
      message: 'Proyecto agregado exitosamente',
      project: rows[0]
    });
  } catch (err) {
    console.error('Error al agregar el proyecto:', err.message);
    res.status(500).json({ success: false, message: 'Error al agregar el proyecto' });
  }
});

module.exports = router;
