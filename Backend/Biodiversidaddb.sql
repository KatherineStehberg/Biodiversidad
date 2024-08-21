CREATE TABLE usuarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(50) CHECK (rol IN ('experto', 'usuario')) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE expertos (
    id UUID PRIMARY KEY REFERENCES usuarios(id),
    especialidad VARCHAR(150) NOT NULL,
    biografia TEXT,
    experiencia INTEGER CHECK (experiencia >= 0),
    certificaciones VARCHAR(255),
    calificacion FLOAT CHECK (calificacion >= 0 AND calificacion <= 5)
);

CREATE TABLE proyectos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT,
    usuario_id UUID REFERENCES usuarios(id),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(50) CHECK (estado IN ('abierto', 'en progreso', 'completado', 'cerrado')) NOT NULL
);
CREATE TABLE postulaciones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    proyecto_id UUID REFERENCES proyectos(id),
    experto_id UUID REFERENCES expertos(id),
    fecha_postulacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(50) CHECK (estado IN ('pendiente', 'aceptada', 'rechazada')) NOT NULL,
    mensaje TEXT
);

CREATE TABLE contratos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    proyecto_id UUID REFERENCES proyectos(id),
    experto_id UUID REFERENCES expertos(id),
    fecha_inicio TIMESTAMP,
    fecha_fin TIMESTAMP,
    detalles TEXT,
    estado VARCHAR(50) CHECK (estado IN ('activo', 'completado', 'cancelado')) NOT NULL
);

CREATE TABLE mensajes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    remitente_id UUID REFERENCES usuarios(id),
    receptor_id UUID REFERENCES usuarios(id),
    contenido TEXT NOT NULL,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    leido BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_proyectos_usuario_id ON proyectos(usuario_id);
CREATE INDEX idx_postulaciones_proyecto_id ON postulaciones(proyecto_id);
CREATE INDEX idx_postulaciones_experto_id ON postulaciones(experto_id);
CREATE INDEX idx_contratos_proyecto_id ON contratos(proyecto_id);
CREATE INDEX idx_contratos_experto_id ON contratos(experto_id);
CREATE INDEX idx_mensajes_remitente_id ON mensajes(remitente_id);
CREATE INDEX idx_mensajes_receptor_id ON mensajes(receptor_id);

CREATE TABLE categorias (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

CREATE TABLE articulos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo VARCHAR(200) NOT NULL,
    contenido TEXT NOT NULL,
    autor_id UUID REFERENCES usuarios(id),
    categoria_id UUID REFERENCES categorias(id),
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(50) CHECK (estado IN ('borrador', 'publicado', 'archivado')) NOT NULL
);

CREATE TABLE comentarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    articulo_id UUID REFERENCES articulos(id),
    usuario_id UUID REFERENCES usuarios(id),
    contenido TEXT NOT NULL,
    fecha_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(50) CHECK (estado IN ('aprobado', 'pendiente', 'rechazado')) NOT NULL
);

CREATE INDEX idx_articulos_autor_id ON articulos(autor_id);
CREATE INDEX idx_articulos_categoria_id ON articulos(categoria_id);
CREATE INDEX idx_comentarios_articulo_id ON comentarios(articulo_id);
CREATE INDEX idx_comentarios_usuario_id ON comentarios(usuario_id);
