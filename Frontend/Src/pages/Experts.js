import React from 'react';

const Experts = () => {
  return (
    <div className="container">
      <h1 className="my-4">Expertos</h1>
      <p>Conéctate con profesionales altamente calificados en diversas áreas ambientales. Consulta sus perfiles para conocer más sobre sus habilidades y experiencia.</p>
      <div className="list-group my-4">
        <a href="#" className="list-group-item list-group-item-action">
          <h5 className="mb-1">Nombre del Experto</h5>
          <p className="mb-1">Breve descripción del experto y su trayectoria profesional.</p>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <h5 className="mb-1">Nombre del Experto</h5>
          <p className="mb-1">Breve descripción del experto y su trayectoria profesional.</p>
        </a>
      </div>
    </div>
  );
};

