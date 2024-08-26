// backend/routes/products.js

const express = require('express');
const router = express.Router();
const db = require('../database/db'); // Asegúrate de que esta ruta sea correcta

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    console.error('Error al obtener los productos:', err.message);
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
});

// Agregar un nuevo producto
router.post('/', async (req, res) => {
  const { name, description, price, image } = req.body;

  try {
    const { rows } = await db.query(
      'INSERT INTO products (name, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, image]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error('Error al agregar el producto:', err.message);
    res.status(500).json({ message: 'Error al agregar el producto' });
  }
});

module.exports = router;
