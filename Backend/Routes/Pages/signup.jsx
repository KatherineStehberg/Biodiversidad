import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Aquí haces la solicitud al backend para registrar al usuario
      const response = await axios.post('/api/users/register', {
        name,
        email,
        password,
      });

      if (response.data.success) {
        // Redirige al usuario a una página de éxito o al login
        navigate('/login', { state: { message: '¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.' } });
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      // Puedes mostrar un mensaje de error al usuario si lo deseas
    }
  };

  return (
    <div className="container">
      <h2>Regístrate</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
};

export default SignUp;
