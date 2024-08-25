import React, { useState, useEffect } from 'react';
import FeaturedItem from '../components/FeaturedItem';

const Home = () => {
  const [experts, setExperts] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchedExperts = [
      { id: 1, name: 'María Pérez', expertise: 'Conservación de la biodiversidad', image: 'path/to/expert1.jpg' },
      { id: 2, name: 'Juan García', expertise: 'Ecología y Sostenibilidad', image: 'path/to/expert2.jpg' },
      { id: 3, name: 'Ana Rodríguez', expertise: 'Educación ambiental', image: 'path/to/expert3.jpg' },
    ];

    const fetchedServices = [
      { id: 1, title: 'Evaluación de Impacto Ambiental', price: '49.99', image: 'path/to/service1.jpg' },
      { id: 2, title: 'Consultoría en Sostenibilidad', price: '59.99', image: 'path/to/service2.jpg' },
      { id: 3, title: 'Capacitación en Biodiversidad', price: '39.99', image: 'path/to/service3.jpg' },
    ];

    setExperts(fetchedExperts);
    setServices(fetchedServices);
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Bienvenido a Biodiversidad.cl</h1>
      <p>Conectamos a los apasionados por el medio ambiente con expertos en biodiversidad y sostenibilidad. Encuentra soluciones a tus necesidades ambientales y colabora con profesionales calificados.</p>
      <div className="text-center my-4">
        <button className="btn btn-primary">Busca un experto ahora</button>
      </div>

      <h2>Expertos Destacados</h2>
      <div className="row">
        {experts.map((expert) => (
          <div key={expert.id} className="col-md-4">
            <FeaturedItem
              image={expert.image}
              title={expert.name}
              description={expert.expertise}
            />
          </div>
        ))}
      </div>

      <h2 className="mt-5">Servicios Populares</h2>
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-md-4">
            <FeaturedItem
              image={service.image}
              title={service.title}
              price={service.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

