import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h1 className="my-4">Contacto</h1>
      <p>¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte. Completa el formulario a continuación y nos pondremos en contacto contigo a la brevedad.</p>
      <form className="my-4">
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Correo electrónico</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Asunto</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Mensaje</label>
          <textarea className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
