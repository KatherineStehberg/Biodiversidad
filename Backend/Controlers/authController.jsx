const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./../database/db');

// Función para manejar el login
async function login(req, res) {
  const { username, password } = req.body;

  try {
    // Verifica si el usuario existe en la base de datos
    const query = 'SELECT * FROM users WHERE username = $1';
    const { rows } = await db.query(query, [username]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Compara la contraseña ingresada con la almacenada en la base de datos
    const user = rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Genera un token JWT si la autenticación es exitosa
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Devuelve el token como respuesta
    res.json({ token });
  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ error: 'Error en el login' });
  }
}

module.exports = {
  login,
};
