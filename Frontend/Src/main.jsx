import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Importa el archivo de estilos globales
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Montando la aplicación en el elemento con id 'root' en el index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
