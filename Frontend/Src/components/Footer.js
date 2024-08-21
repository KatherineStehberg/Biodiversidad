import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Biodiversidad.cl</h5>
            <p>
              Conectando apasionados por el medio ambiente con expertos en biodiversidad y sostenibilidad.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Enlaces rápidos</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/" className="text-dark">Inicio</Link></li>
              <li><Link to="/services" className="text-dark">Servicios</Link></li>
              <li><Link to="/experts" className="text-dark">Expertos</Link></li>
              <li><Link to="/projects" className="text-dark">Proyectos</Link></li>
              <li><Link to="/blog" className="text-dark">Blog</Link></li>
              <li><Link to="/contact" className="text-dark">Contacto</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Redes sociales</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Facebook</a></li>
              <li><a href="#!" className="text-dark">Twitter</a></li>
              <li><a href="#!" className="text-dark">Instagram</a></li>
              <li><a href="#!" className="text-dark">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-light">
        &copy; 2024 Biodiversidad.cl | <Link to="/terms" className="text-light">Términos y condiciones</Link> | <Link to="/privacy" className="text-light">Política de privacidad</Link>
      </div>
    </footer>
  );
};

export default Footer;
