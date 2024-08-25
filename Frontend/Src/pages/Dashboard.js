import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext); // Uso del contexto de autenticación
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch de proyectos desde el backend
    axios.get('/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });

    // Fetch de usuarios desde el backend
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Dashboard de {user?.name}</h1> {/* Nombre del usuario autenticado */}
      <button className="btn btn-danger mb-4" onClick={logout}>Cerrar sesión</button> {/* Botón de cierre de sesión */}

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Proyectos Recientes</h5>
              <ul className="list-group">
                {projects.map(project => (
                  <li key={project.id} className="list-group-item">
                    {project.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Usuarios Registrados</h5>
              <ul className="list-group">
                {users.map(user => (
                  <li key={user.id} className="list-group-item">
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
