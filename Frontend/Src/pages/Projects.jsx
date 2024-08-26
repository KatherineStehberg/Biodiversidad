import React from 'react';

const Projects = () => {
  return (
    <div className="container">
      <h1 className="my-4">Proyectos</h1>
      <p>¿Tienes un proyecto ambiental en mente? Publica tus necesidades y encuentra al experto ideal para llevarlo a cabo.</p>
      <form className="my-4">
        <div className="form-group">
          <label>Título del proyecto</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea className="form-control"></textarea>
        </div>
        <div className="form-group">
          <label>Presupuesto</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Fecha límite</label>
          <input type="date" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Publicar proyecto</button>
      </form>
      <h2>Listado de proyectos</h2>
      <p>Explora los proyectos publicados por otros usuarios y ofrece tus servicios como experto.</p>
      <div className="list-group my-4">
        <a href="#" className="list-group-item list-group-item-action">
          <h5 className="mb-1">Título del Proyecto</h5>
          <p className="mb-1">Descripción completa del proyecto.</p>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <h5 className="mb-1">Título del Proyecto</h5>
          <p className="mb-1">Descripción completa del proyecto.</p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
