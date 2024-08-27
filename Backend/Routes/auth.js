// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database/bd'); // Importa el archivo de configuración de PostgreSQL

// Login de usuario
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verifica si el usuario existe en la base de datos
    const { rows } = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Compara la contraseña ingresada con la almacenada en la base de datos
    const user = rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Genera y devuelve un token JWT si la autenticación es exitosa
    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ 
      message: 'Autenticación exitosa',
      token,
      user: { id: user.id, username: user.username }
    });
  } catch (err) {
    console.error('Error en el login:', err.message);
    res.status(500).json({ error: 'Ocurrió un error en el login' });
  }
});

// Registro de usuario
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verifica si el usuario ya existe en la base de datos
    const { rows: existingUser } = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Hash de la contraseña antes de almacenarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserta el nuevo usuario en la base de datos
    const { rows: newUser } = await db.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
      [username, hashedPassword]
    );

    res.status(201).json({ 
      message: 'Usuario registrado exitosamente', 
      user: newUser[0]
    });
  } catch (err) {
    console.error('Error en el registro:', err.message);
    res.status(500).json({ error: 'Ocurrió un error en el registro' });
  }
});

module.exports = router;
