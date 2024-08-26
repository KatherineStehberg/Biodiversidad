import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './services.css'; // Asegúrate de que los estilos sean relevantes para la página

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulación de fetching de servicios desde el backend
    axios.get('/api/services')
      .then(response => {
        setServices(response.data.services); // Asegúrate de que la respuesta esté estructurada correctamente
      })
      .catch(error => {
        console.error('Error al cargar los servicios:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Servicios Disponibles</h1>
      <p>Encuentra los servicios ideales para tus necesidades ambientales. Nuestros expertos están listos para ayudarte en cualquier proyecto relacionado con biodiversidad y sostenibilidad.</p>
      <div className="row">
        {services.map(service => (
          <div key={service.id} className="col-md-4">
            <div className="card mb-4">
              <img src={service.image} className="card-img-top" alt={service.title} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <p className="card-text"><strong>Precio:</strong> ${service.price}</p>
                <button className="btn btn-primary">Solicitar servicio</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
