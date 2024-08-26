import React from 'react';

const Blog = () => {
  return (
    <div className="container">
      <h1 className="my-4">Blog</h1>
      <p>Mantente informado con las últimas noticias y artículos sobre biodiversidad y sostenibilidad. Aprende de los expertos y descubre nuevas tendencias en el campo ambiental.</p>
      <div className="list-group my-4">
        <a href="#" className="list-group-item list-group-item-action">
          <h5 className="mb-1">Título del Artículo</h5>
          <p className="mb-1">Resumen del artículo.</p>
          <small>Autor, Fecha</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <h5 className="mb-1">Título del Artículo</h5>
          <p className="mb-1">Resumen del artículo.</p>
          <small>Autor, Fecha</small>
        </a>
      </div>
    </div>
  );
};

export default Blog;

