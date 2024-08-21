// backend/routes/projects.js

const express = require('express');
const router = express.Router();
const db = require('../db'); // Importa el archivo de configuración de PostgreSQL

// Obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM projects');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ error: 'Error fetching projects' });
  }
});

// Agregar un nuevo proyecto
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  try {
    const { rows } = await db.query('INSERT INTO projects (title, description) VALUES ($1, $2) RETURNING *', [title, description]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error('Error adding project:', err);
    res.status(500).json({ error: 'Error adding project' });
  }
});

module.exports = router;
