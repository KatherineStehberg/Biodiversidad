import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <h1 className="my-4">Bienvenido a Biodiversidad.cl</h1>
      <p>Conectamos a los apasionados por el medio ambiente con expertos en biodiversidad y sostenibilidad. Encuentra soluciones a tus necesidades ambientales y colabora con profesionales calificados.</p>
      <div className="text-center my-4">
        <button className="btn btn-primary">Busca un experto ahora</button>
      </div>
      <h2>Expertos Destacados</h2>
      <p>Conoce a algunos de los mejores profesionales en biodiversidad y sostenibilidad. Sus conocimientos y experiencia pueden ayudarte a lograr un impacto positivo en el medio ambiente.</p>
      <h2>Servicios Populares</h2>
      <p>Consulta los servicios más solicitados por nuestra comunidad. Encuentra rápidamente la ayuda que necesitas.</p>
    </div>
  );
};

export default Home;
