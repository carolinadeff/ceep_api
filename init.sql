CREATE TABLE categorias (
  id SERIAL PRIMARY KEY,
  categoria VARCHAR(50) NOT NULL
);

INSERT INTO categorias (categoria)
VALUES  ('Exemplo de categoria');


CREATE TABLE notas (
  id SERIAL PRIMARY KEY,
  categoria VARCHAR(50) NOT NULL,
  titulo VARCHAR(50) NOT NULL,
  texto VARCHAR(255) NOT NULL
);

INSERT INTO notas (categoria, titulo, texto)
VALUES  ('Exemplo de Categoria', 'Exemplo de título', 'Exemplo de texto');