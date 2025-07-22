create database biblioteca;
use biblioteca;

CREATE TABLE Rol (
    id_rol INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(50) UNIQUE NOT NULL,
    descripcion TEXT
);
CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    mail VARCHAR(50) UNIQUE NOT NULL,
    contrasenia VARCHAR(255) NOT NULL,
    id_rol INT NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES Rol(id_rol)
);

CREATE TABLE Libro (
    id_libro INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    editorial VARCHAR(100),
    anio_publicacion CHAR(4) NOT NULL, 
    genero VARCHAR(100)
    existencias INT DEFAULT 0
);

CREATE TABLE Prestamo (
    id_prestamo INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_libro INT,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_libro) REFERENCES Libro(id_libro)
);
CREATE TABLE Resenia (
    id_resenia INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_libro INT,
    texto_resenia TEXT,
    calificacion INT CHECK (calificacion BETWEEN 1 AND 5),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_libro) REFERENCES Libro(id_libro)
);


-- -------------------------------------------------------------------------------
/*
Usuarios
	GET /usuarios: Obtener todos los usuarios.
	GET /usuarios/:id: Obtener un usuario por su id_usuario.
	POST /usuarios: Crear un nuevo usuario.
	PUT /usuarios/:id: Actualizar los datos de un usuario.
	DELETE /usuarios/:id: Eliminar un usuario.
-- ----------------------------------------------
Libros
	GET /libros: Obtener todos los libros.
	GET /libros/:id: Obtener un libro por su id_libro. (o cualquiera de sus campos)
	POST /libros: Crear un nuevo libro.
	PUT /libros/:id: Actualizar los datos de un libro.
	PUT /libros/:id/existencia: Actualizar la existencia de un libro (cantidad disponible), podria no ser un endpoint sino un disparador.
	DELETE /libros/:id: Eliminar un libro.
-- ----------------------------------------------
Prestamos
	GET /prestamos: Obtener todos los préstamos.
	GET /prestamos/:id: Obtener un préstamo por su id_prestamos.
	POST /prestamos: Crear un nuevo préstamo (reserva de un libro).
	PUT /prestamos/:id: Actualizar los datos de un préstamo (por ejemplo, fechas de devolución).
	DELETE /prestamos/:id: Eliminar un préstamo.
-- ----------------------------------------------
Resenias
	GET /resenias: Obtener todas las reseñas.
	GET /resenias/:id: Obtener una reseña por su id_resenia.
	GET /resenias/libro/:id_libro: Obtener reseñas de un libro específico.
	POST /resenias: Crear una nueva reseña.
	PUT /resenias/:id: Actualizar una reseña existente.
	DELETE /resenias/:id: Eliminar una reseña.

-- ----------------------------------------------
lógicas específicas
	GET /libros/disponibles: Obtener todos los libros con existencia disponible para préstamos.
	GET /prestamos/usuario/:id_usuario: Obtener todos los préstamos de un usuario específico.
	GET /prestamos/libro/:id_libro: Obtener todos los préstamos realizados para un libro específico.
	
*/




-- -------------------------------------------------------------------
-- DATOS
-- -------------------------------------------------------------------

-- Selección de la base de datos
USE biblioteca;

-- -------------------------------------------------------------------
-- INSERTS PARA LA TABLA 'Rol'
-- -------------------------------------------------------------------
INSERT INTO Rol (nombre_rol, descripcion) VALUES
('Administrador', 'Control total sobre la aplicación y los datos.'),
('Bibliotecario', 'Gestión de libros, préstamos y usuarios.'),
('Lector', 'Acceso a la búsqueda de libros, préstamos y reseñas.');

-- -------------------------------------------------------------------
-- INSERTS PARA LA TABLA 'Usuario'
-- -------------------------------------------------------------------
-- Se asume que id_rol 1 = Administrador, 2 = Bibliotecario, 3 = Lector
INSERT INTO Usuario (nombre, apellido, mail, contrasenia, id_rol) VALUES
('Ana', 'García', 'ana.garcia@mail.com', 'hashedpass1', 3),
('Juan', 'Pérez', 'juan.perez@mail.com', 'hashedpass2', 3),
('María', 'López', 'maria.lopez@mail.com', 'hashedpass3', 3),
('Pedro', 'Martínez', 'pedro.martinez@mail.com', 'hashedpass4', 3),
('Sofía', 'Rodríguez', 'sofia.rodriguez@mail.com', 'hashedpass5', 3),
('Carlos', 'Sánchez', 'carlos.sanchez@mail.com', 'hashedpass6', 3),
('Laura', 'Díaz', 'laura.diaz@mail.com', 'hashedpass7', 3),
('Miguel', 'Fernández', 'miguel.fernandez@mail.com', 'hashedpass8', 3),
('Elena', 'González', 'elena.gonzalez@mail.com', 'hashedpass9', 3),
('Pablo', 'Ruiz', 'pablo.ruiz@mail.com', 'hashedpass10', 3),
('Lucía', 'Torres', 'lucia.torres@mail.com', 'hashedpass11', 3),
('Jorge', 'Jiménez', 'jorge.jimenez@mail.com', 'hashedpass12', 3),
('Isabel', 'Moreno', 'isabel.moreno@mail.com', 'hashedpass13', 3),
('Francisco', 'Vázquez', 'francisco.vazquez@mail.com', 'hashedpass14', 3),
('Natalia', 'Alonso', 'natalia.alonso@mail.com', 'hashedpass15', 3),
('David', 'Muñoz', 'david.munoz@mail.com', 'hashedpass16', 3),
('Carmen', 'Romero', 'carmen.romero@mail.com', 'hashedpass17', 3),
('Alejandro', 'Herrera', 'alejandro.herrera@mail.com', 'hashedpass18', 3),
('Andrea', 'Navarro', 'andrea.navarro@mail.com', 'hashedpass19', 3),
('Sergio', 'Gil', 'sergio.gil@mail.com', 'hashedpass20', 3),
('Marta', 'Prieto', 'marta.prieto@mail.com', 'hashedpass21', 3),
('Daniel', 'Castro', 'daniel.castro@mail.com', 'hashedpass22', 3),
('Paula', 'Molina', 'paula.molina@mail.com', 'hashedpass23', 3),
('Javier', 'Serrano', 'javier.serrano@mail.com', 'hashedpass24', 3),
('Sara', 'Blanco', 'sara.blanco@mail.com', 'hashedpass25', 3),
('Roberto', 'Ibáñez', 'roberto.ibanez@mail.com', 'hashedpass26', 3),
('Clara', 'Garrido', 'clara.garrido@mail.com', 'hashedpass27', 3),
('Luis', 'Ortega', 'luis.ortega@mail.com', 'hashedpass28', 3),
('Marina', 'Delgado', 'marina.delgado@mail.com', 'hashedpass29', 3),
('Diego', 'Ramírez', 'diego.ramirez@mail.com', 'hashedpass30', 3),
('Lucía', 'Martín', 'lucia.martin@mail.com', 'hashedpass31', 3),
('Manuel', 'Gómez', 'manuel.gomez@mail.com', 'hashedpass32', 3),
('Laura', 'Ruiz', 'laura.ruiz@mail.com', 'hashedpass33', 3),
('Fernando', 'Moreno', 'fernando.moreno@mail.com', 'hashedpass34', 3),
('Cristina', 'Navarro', 'cristina.navarro@mail.com', 'hashedpass35', 3),
('BibliotecarioJefe', 'Admin', 'bibliotecario.jefe@mail.com', 'adminpass', 2),
('BibliotecarioAux', 'Soporte', 'bibliotecario.aux@mail.com', 'auxpass', 2),
('AdminGeneral', 'Sistema', 'admin.general@mail.com', 'superadmin', 1);

-- -------------------------------------------------------------------
-- INSERTS PARA LA TABLA 'Libro'
-- -------------------------------------------------------------------
INSERT INTO Libro (titulo, autor, editorial, anio_publicacion, genero) VALUES
('Cien años de soledad', 'Gabriel García Márquez', 'Editorial Sudamericana', 1967, 'Realismo Mágico'),
('El ingenioso hidalgo Don Quijote de la Mancha', 'Miguel de Cervantes', 'Francisco de Robles', 1605, 'Novela de caballerías'),
('1984', 'George Orwell', 'Secker & Warburg', 1949, 'Distopía'),
('Orgullo y prejuicio', 'Jane Austen', 'T. Egerton, Whitehall', 1813, 'Romance'),
('El Gran Gatsby', 'F. Scott Fitzgerald', 'Charles Scribner\'s Sons', 1925, 'Novela'),
('Crimen y castigo', 'Fiódor Dostoievski', 'The Russian Messenger', 1866, 'Filosofía'),
('Ulises', 'James Joyce', 'Sylvia Beach', 1922, 'Modernismo'),
('En busca del tiempo perdido', 'Marcel Proust', 'Grasset', 1913, 'Novela'),
('Hamlet', 'William Shakespeare', 'Nicholas Ling', 1603, 'Tragedia'),
('La Odisea', 'Homero', NULL, -800, 'Epopeya'),
('Moby Dick', 'Herman Melville', 'Harper & Brothers', 1851, 'Aventura'),
('Guerra y paz', 'León Tolstói', 'The Russian Messenger', 1869, 'Histórica'),
('El Principito', 'Antoine de Saint-Exupéry', 'Reynal & Hitchcock', 1943, 'Fábula'),
('Matar un ruiseñor', 'Harper Lee', 'J. B. Lippincott & Co.', 1960, 'Drama'),
('El Señor de los Anillos', 'J.R.R. Tolkien', 'George Allen & Unwin', 1954, 'Fantasía'),
('Un mundo feliz', 'Aldous Huxley', 'Chatto & Windus', 1932, 'Distopía'),
('Anna Karenina', 'León Tolstói', 'The Russian Messenger', 1877, 'Romance'),
('Cumbres borrascosas', 'Emily Brontë', 'Thomas Cautley Newby', 1847, 'Gótico'),
('Las uvas de la ira', 'John Steinbeck', 'The Viking Press', 1939, 'Novela social'),
('Donde habitan los monstruos', 'Maurice Sendak', 'Harper & Row', 1963, 'Infantil'),
('La metamorfosis', 'Franz Kafka', 'Kurt Wolff Verlag', 1915, 'Ficción Absurda'),
('El retrato de Dorian Gray', 'Oscar Wilde', 'Lippincott''s Monthly Magazine', 1890, 'Gótica'),
('Frankenstein', 'Mary Shelley', 'Lackington, Hughes, Harding, Mavor & Jones', 1818, 'Gótica'),
('Drácula', 'Bram Stoker', 'Archibald Constable and Company', 1897, 'Terror'),
('Rebelión en la granja', 'George Orwell', 'Secker & Warburg', 1945, 'Sátira política'),
('Los Miserables', 'Victor Hugo', 'A. Lacroix, Verboeckhoven & Cie.', 1862, 'Histórica'),
('El Conde de Montecristo', 'Alexandre Dumas', 'Le Journal des Débats', 1844, 'Aventura'),
('Veinte mil leguas de viaje submarino', 'Julio Verne', 'Pierre-Jules Hetzel', 1870, 'Ciencia Ficción'),
('Viaje al centro de la Tierra', 'Julio Verne', 'Pierre-Jules Hetzel', 1864, 'Aventura'),
('De la Tierra a la Luna', 'Julio Verne', 'Pierre-Jules Hetzel', 1865, 'Ciencia Ficción'),
('La vuelta al mundo en ochenta días', 'Julio Verne', 'Pierre-Jules Hetzel', 1873, 'Aventura'),
('Un capitán de quince años', 'Julio Verne', 'Pierre-Jules Hetzel', 1878, 'Aventura'),
('Miguel Strogoff', 'Julio Verne', 'Pierre-Jules Hetzel', 1876, 'Aventura'),
('Las aventuras de Tom Sawyer', 'Mark Twain', 'Chatto & Windus', 1876, 'Aventura'),
('Las aventuras de Huckleberry Finn', 'Mark Twain', 'Charles L. Webster And Company', 1884, 'Aventura'),
('Alicia en el país de las maravillas', 'Lewis Carroll', 'Macmillan', 1865, 'Fantasía'),
('A través del espejo', 'Lewis Carroll', 'Macmillan', 1871, 'Fantasía'),
('El Hobbit', 'J.R.R. Tolkien', 'George Allen & Unwin', 1937, 'Fantasía'),
('El guardián entre el centeno', 'J.D. Salinger', 'Little, Brown and Company', 1951, 'Novela'),
('Sobre héroes y tumbas', 'Ernesto Sábato', 'Editorial Sudamericana', 1961, 'Novela'),
('Rayuela', 'Julio Cortázar', 'Editorial Sudamericana', 1963, 'Novela'),
('Ficciones', 'Jorge Luis Borges', 'Emecé Editores', 1944, 'Cuentos'),
('El Aleph', 'Jorge Luis Borges', 'Losada', 1949, 'Cuentos'),
('Crónica de una muerte anunciada', 'Gabriel García Márquez', 'La Oveja Negra', 1981, 'Novela'),
('El amor en los tiempos del cólera', 'Gabriel García Márquez', 'Editorial Sudamericana', 1985, 'Romance'),
('La casa de los espíritus', 'Isabel Allende', 'Plaza & Janés', 1982, 'Realismo Mágico'),
('De amor y de sombra', 'Isabel Allende', 'Plaza & Janés', 1984, 'Romance'),
('La ciudad y los perros', 'Mario Vargas Llosa', 'Seix Barral', 1963, 'Novela'),
('La fiesta del Chivo', 'Mario Vargas Llosa', 'Santillana', 2000, 'Histórica'),
('Cuentos de la selva', 'Horacio Quiroga', 'Sociedad Editorial Argentina', 1918, 'Cuentos'),
('Martín Fierro', 'José Hernández', 'Imprenta de La Pampa', 1872, 'Poesía gauchesa'),
('El túnel', 'Ernesto Sábato', 'Editorial Sudamericana', 1948, 'Novela'),
('Las venas abiertas de América Latina', 'Eduardo Galeano', 'Siglo XXI Editores', 1971, 'Ensayo'),
('Libro de los abrazos', 'Eduardo Galeano', 'Siglo XXI Editores', 1989, 'Cuentos'),
('La historia interminable', 'Michael Ende', 'Thienemann', 1979, 'Fantasía'),
('Momo', 'Michael Ende', 'Thienemann', 1973, 'Fantasía'),
('El nombre de la rosa', 'Umberto Eco', 'Bompiani', 1980, 'Misterio'),
('El péndulo de Foucault', 'Umberto Eco', 'Bompiani', 1988, 'Novela'),
('Los pilares de la Tierra', 'Ken Follett', 'William Morrow and Company', 1989, 'Histórica'),
('Un saco de canicas', 'Joseph Joffo', 'Éditions Jean-Claude Lattès', 1973, 'Biografía'),
('La ladrona de libros', 'Markus Zusak', 'Picador', 2005, 'Drama'),
('El código Da Vinci', 'Dan Brown', 'Doubleday', 2003, 'Thriller'),
('Ángeles y demonios', 'Dan Brown', 'Atria Books', 2000, 'Thriller'),
('El psicoanalista', 'John Katzenbach', 'Ballantine Books', 2002, 'Thriller psicológico'),
('La sombra del viento', 'Carlos Ruiz Zafón', 'Editorial Planeta', 2001, 'Misterio'),
('El juego del ángel', 'Carlos Ruiz Zafón', 'Editorial Planeta', 2008, 'Misterio'),
('Cazadores de sombras: Ciudad de hueso', 'Cassandra Clare', 'Margaret K. McElderry Books', 2007, 'Fantasía juvenil'),
('Divergente', 'Veronica Roth', 'Katherine Tegen Books', 2011, 'Distopía juvenil'),
('Los juegos del hambre', 'Suzanne Collins', 'Scholastic Corporation', 2008, 'Distopía juvenil'),
('Crepúsculo', 'Stephenie Meyer', 'Little, Brown and Company', 2005, 'Fantasía juvenil'),
('Harry Potter y la piedra filosofal', 'J.K. Rowling', 'Bloomsbury Publishing', 1997, 'Fantasía juvenil'),
('Harry Potter y la cámara secreta', 'J.K. Rowling', 'Bloomsbury Publishing', 1998, 'Fantasía juvenil'),
('Harry Potter y el prisionero de Azkaban', 'J.K. Rowling', 'Bloomsbury Publishing', 1999, 'Fantasía juvenil'),
('Harry Potter y el cáliz de fuego', 'J.K. Rowling', 'Bloomsbury Publishing', 2000, 'Fantasía juvenil'),
('Harry Potter y la Orden del Fénix', 'J.K. Rowling', 'Bloomsbury Publishing', 2003, 'Fantasía juvenil'),
('Harry Potter y el misterio del Príncipe', 'J.K. Rowling', 'Bloomsbury Publishing', 2005, 'Fantasía juvenil'),
('Harry Potter y las Reliquias de la Muerte', 'J.K. Rowling', 'Bloomsbury Publishing', 2007, 'Fantasía juvenil'),
('Eragon', 'Christopher Paolini', 'Alfred A. Knopf', 2000, 'Fantasía'),
('Eldest', 'Christopher Paolini', 'Alfred A. Knopf', 2005, 'Fantasía'),
('Brisingr', 'Christopher Paolini', 'Alfred A. Knopf', 2008, 'Fantasía'),
('Legado', 'Christopher Paolini', 'Alfred A. Knopf', 2011, 'Fantasía'),
('El Alquimista', 'Paulo Coelho', 'HarperOne', 1988, 'Fábula'),
('Veronika decide morir', 'Paulo Coelho', 'HarperOne', 1998, 'Filosofía'),
('Once Minutos', 'Paulo Coelho', 'HarperOne', 2003, 'Romance'),
('El Psicoanalista', 'John Katzenbach', 'Ballantine Books', 2002, 'Thriller psicológico'),
('La sombra del viento', 'Carlos Ruiz Zafón', 'Editorial Planeta', 2001, 'Misterio'),
('El juego del ángel', 'Carlos Ruiz Zafón', 'Editorial Planeta', 2008, 'Misterio'),
('Marina', 'Carlos Ruiz Zafón', 'Edebé', 1999, 'Misterio'),
('El prisionero del cielo', 'Carlos Ruiz Zafón', 'Editorial Planeta', 2011, 'Misterio'),
('El laberinto de los espíritus', 'Carlos Ruiz Zafón', 'Editorial Planeta', 2016, 'Misterio'),
('Sapiens: De animales a dioses', 'Yuval Noah Harari', 'Debate', 2014, 'No Ficción'),
('Homo Deus: Breve historia del mañana', 'Yuval Noah Harari', 'Debate', 2016, 'No Ficción'),
('21 lecciones para el siglo XXI', 'Yuval Noah Harari', 'Debate', 2018, 'No Ficción'),
('Padre Rico, Padre Pobre', 'Robert Kiyosaki', 'Plata Publishing', 1997, 'Finanzas'),
('Hábitos atómicos', 'James Clear', 'Ariel', 2018, 'Autoayuda'),
('El poder del ahora', 'Eckhart Tolle', 'New World Library', 1997, 'Espiritualidad'),
('Los cuatro acuerdos', 'Don Miguel Ruiz', 'Amber-Allen Publishing', 1997, 'Espiritualidad');


-- -------------------------------------------------------------------
-- INSERTS PARA LA TABLA 'Prestamo'
-- -------------------------------------------------------------------
INSERT INTO Prestamo (id_usuario, id_libro, fecha_prestamo, fecha_devolucion) VALUES
(1, 1, '2023-01-10', '2023-01-25'),
(2, 3, '2023-01-15', '2023-02-01'),
(3, 5, '2023-01-20', '2023-02-05'),
(4, 7, '2023-01-25', '2023-02-10'),
(5, 9, '2023-02-01', '2023-02-15'),
(6, 11, '2023-02-05', '2023-02-20'),
(7, 13, '2023-02-10', '2023-02-25'),
(8, 15, '2023-02-15', '2023-03-01'),
(9, 17, '2023-02-20', '2023-03-05'),
(10, 19, '2023-02-25', '2023-03-10'),
(1, 2, '2023-03-01', '2023-03-16'),
(2, 4, '2023-03-05', '2023-03-20'),
(3, 6, '2023-03-10', '2023-03-25'),
(4, 8, '2023-03-15', '2023-03-30'),
(5, 10, '2023-03-20', '2023-04-04'),
(6, 12, '2023-03-25', '2023-04-09'),
(7, 14, '2023-03-30', '2023-04-14'),
(8, 16, '2023-04-04', '2023-04-19'),
(9, 18, '2023-04-09', '2023-04-24'),
(10, 20, '2023-04-14', '2023-04-29'),
(1, 21, '2023-04-19', '2023-05-04'),
(2, 23, '2023-04-24', '2023-05-09'),
(3, 25, '2023-04-29', '2023-05-14'),
(4, 27, '2023-05-04', '2023-05-19'),
(5, 29, '2023-05-09', '2023-05-24'),
(6, 31, '2023-05-14', '2023-05-29'),
(7, 33, '2023-05-19', '2023-06-03'),
(8, 35, '2023-05-24', '2023-06-08'),
(9, 37, '2023-05-29', '2023-06-13'),
(10, 39, '2023-06-03', '2023-06-18'),
(11, 41, '2023-06-08', '2023-06-23'),
(12, 43, '2023-06-13', '2023-06-28'),
(13, 45, '2023-06-18', '2023-07-03'),
(14, 47, '2023-06-23', '2023-07-08'),
(15, 49, '2023-06-28', '2023-07-13'),
(16, 51, '2023-07-03', '2023-07-18'),
(17, 53, '2023-07-08', '2023-07-23'),
(18, 55, '2023-07-13', '2023-07-28'),
(19, 57, '2023-07-18', '2023-08-02'),
(20, 59, '2023-07-23', '2023-08-07'),
(21, 61, '2023-07-28', '2023-08-12'),
(22, 63, '2023-08-02', '2023-08-17'),
(23, 65, '2023-08-07', '2023-08-22'),
(24, 67, '2023-08-12', '2023-08-27'),
(25, 69, '2023-08-17', '2023-09-01'),
(26, 71, '2023-08-22', '2023-09-06'),
(27, 73, '2023-08-27', '2023-09-11'),
(28, 75, '2023-09-01', '2023-09-16'),
(29, 77, '2023-09-06', '2023-09-21'),
(30, 79, '2023-09-11', '2023-09-26'),
(31, 81, '2023-09-16', '2023-10-01'),
(32, 83, '2023-09-21', '2023-10-06'),
(33, 85, '2023-09-26', '2023-10-11'),
(34, 87, '2023-10-01', '2023-10-16'),
(35, 89, '2023-10-06', '2023-10-21'),
(1, 91, '2023-10-11', '2023-10-26'),
(2, 93, '2023-10-16', '2023-10-31'),
(3, 95, '2023-10-21', '2023-11-05'),
(4, 97, '2023-10-26', '2023-11-10'),
(5, 1, '2023-11-05', '2023-11-20'),
(6, 3, '2023-11-10', '2023-11-25'),
(7, 5, '2023-11-15', '2023-11-30'),
(8, 7, '2023-11-20', '2023-12-05'),
(9, 9, '2023-11-25', '2023-12-10'),
(10, 11, '2023-12-01', '2023-12-16'),
(11, 13, '2023-12-05', '2023-12-20'),
(12, 15, '2023-12-10', '2023-12-25'),
(13, 17, '2023-12-15', '2023-12-30'),
(14, 19, '2023-12-20', '2024-01-04'),
(15, 21, '2023-12-25', '2024-01-09'),
(16, 23, '2023-12-30', '2024-01-14'),
(17, 25, '2024-01-04', '2024-01-19'),
(18, 27, '2024-01-09', '2024-01-24'),
(20, 29, '2024-01-14', '2024-01-29'),
(21, 31, '2024-01-19', '2024-02-03'),
(22, 33, '2024-01-24', '2024-02-08'),
(23, 35, '2024-01-29', '2024-02-13'),
(24, 37, '2024-02-03', '2024-02-18'),
(25, 39, '2024-02-08', '2024-02-23'),
(26, 41, '2024-02-13', '2024-02-28'),
(27, 43, '2024-02-18', '2024-03-04'),
(28, 45, '2024-02-23', '2024-03-09'),
(29, 47, '2024-02-28', '2024-03-14'),
(30, 49, '2024-03-04', '2024-03-19'),
(31, 51, '2024-03-09', '2024-03-24'),
(32, 53, '2024-03-14', '2024-03-29'),
(33, 55, '2024-03-19', '2024-04-03'),
(34, 57, '2024-03-24', '2024-04-08'),
(35, 59, '2024-03-29', '2024-04-13'),
(1, 60, '2024-04-01', NULL), -- Préstamo actual, no devuelto
(2, 62, '2024-04-05', NULL), -- Préstamo actual, no devuelto
(3, 64, '2024-04-10', NULL), -- Préstamo actual, no devuelto
(4, 66, '2024-04-15', NULL), -- Préstamo actual, no devuelto
(5, 68, '2024-04-20', NULL), -- Préstamo actual, no devuelto
(6, 70, '2024-04-25', NULL), -- Préstamo actual, no devuelto
(7, 72, '2024-05-01', NULL), -- Préstamo actual, no devuelto
(8, 74, '2024-05-05', NULL), -- Préstamo actual, no devuelto
(9, 76, '2024-05-10', NULL), -- Préstamo actual, no devuelto
(10, 78, '2024-05-15', NULL), -- Préstamo actual, no devuelto
(11, 80, '2024-05-20', NULL), -- Préstamo actual, no devuelto
(12, 82, '2024-05-25', NULL), -- Préstamo actual, no devuelto
(13, 84, '2024-06-01', NULL), -- Préstamo actual, no devuelto
(14, 86, '2024-06-05', NULL), -- Préstamo actual, no devuelto
(15, 88, '2024-06-10', NULL), -- Préstamo actual, no devuelto
(16, 90, '2024-06-15', NULL), -- Préstamo actual, no devuelto
(17, 92, '2024-06-20', NULL), -- Préstamo actual, no devuelto
(18, 94, '2024-06-25', NULL), -- Préstamo actual, no devuelto
(19, 96, '2024-06-30', NULL), -- Préstamo actual, no devuelto
(22, 1, '2024-07-15', NULL), -- Préstamo actual, no devuelto
(23, 2, '2024-07-20', NULL); -- Préstamo actual, no devuelto


-- -------------------------------------------------------------------
-- INSERTS PARA LA TABLA 'Resenia'
-- -------------------------------------------------------------------
INSERT INTO Resenia (id_usuario, id_libro, texto_resenia, calificacion) VALUES
(1, 1, 'Una obra maestra, imprescindible para cualquier amante de la literatura.', 5),
(2, 3, 'Interesante, aunque un poco densa en algunas partes. Te hace pensar.', 4),
(3, 5, 'Un clásico con un lenguaje hermoso, pero triste.', 4),
(4, 7, 'Muy difícil de seguir, pero con momentos de pura brillantez.', 3),
(5, 9, 'Un drama atemporal, la lectura es siempre un placer.', 5),
(6, 11, 'Me atrapó de principio a fin, una aventura inolvidable.', 5),
(7, 13, 'Un libro para todas las edades, lleno de sabiduría y ternura.', 5),
(8, 15, 'La fantasía épica en su máxima expresión. ¡Adoro este mundo!', 5),
(9, 17, 'Demasiado largo para mi gusto, pero bien escrito.', 3),
(10, 19, 'Una historia dura pero necesaria, que retrata una época difícil.', 4),
(1, 21, 'Una lectura extraña pero fascinante, te deja pensando.', 4),
(2, 23, 'Un thriller psicológico que te mantiene en vilo hasta la última página.', 5),
(3, 25, 'Un clásico de terror que todavía da escalofríos.', 4),
(4, 27, 'Una reinterpretación brillante de un clásico. Impresionante.', 5),
(5, 29, 'Un viaje apasionante al centro de la tierra. Julio Verne nunca defrauda.', 5),
(6, 31, 'Aventura pura y emocionante. Muy recomendable.', 4),
(7, 33, 'El mejor libro para viajar sin moverte de casa.', 5),
(8, 35, 'Una historia épica que me encantó desde el principio.', 4),
(9, 37, 'Un clásico de fantasía que nunca pasa de moda. Un mundo mágico.', 5),
(10, 39, 'Profundo y conmovedor, una joya de la literatura argentina.', 5),
(11, 41, 'Intensa y experimental, una lectura que te desafía.', 4),
(12, 43, 'Cuentos que te dejan pensando, la pluma de Borges es única.', 5),
(13, 45, 'Una historia inolvidable, con un final impactante.', 5),
(14, 47, 'El amor en su máxima expresión, narrado con maestría.', 5),
(15, 49, 'Realismo mágico en estado puro. Adoro a Isabel Allende.', 5),
(16, 51, 'Crudo y realista, una mirada a la sociedad peruana.', 4),
(17, 53, 'Un clásico de la literatura infantil que sigue emocionando.', 5),
(18, 55, 'Una novela de misterio que te atrapa desde el principio.', 5),
(19, 57, 'Una lectura muy educativa y reveladora sobre la humanidad.', 5),
(20, 59, 'Cambió mi perspectiva sobre las finanzas personales. Muy útil.', 5),
(21, 61, 'Lectura obligada para entender la mente humana.', 5),
(22, 63, 'Increíble cómo el autor describe el mundo fantástico.', 5),
(23, 65, 'Me enganchó desde el primer capítulo. Muy original.', 4),
(24, 67, 'Una historia desgarradora pero llena de esperanza. Muy bien escrita.', 5),
(25, 69, 'Un thriller con un ritmo frenético, muy entretenido.', 4),
(26, 71, 'La ambientación es espectacular. Carlos Ruiz Zafón es un genio.', 5),
(27, 73, 'Un libro que te hace reflexionar sobre la vida y la muerte.', 5),
(28, 75, 'Me encantó la historia, aunque el final me dejó con ganas de más.', 4),
(29, 77, 'Una saga que me ha marcado, los personajes son inolvidables.', 5),
(30, 79, 'El libro que inició la magia. ¡Un clásico!', 5),
(1, 81, 'Cada libro de Harry Potter es una maravilla. Lo recomiendo.', 5),
(2, 83, 'La mejor parte de la saga, oscura y emocionante.', 5),
(3, 85, 'Un final épico para una saga legendaria.', 5),
(4, 87, 'Buena introducción a la saga Eragon, me gustó.', 4),
(5, 89, 'Profundo y espiritual, me ayudó a encontrar calma.', 5),
(6, 91, 'Una lectura transformadora. Los principios son aplicables a todo.', 5),
(7, 93, 'Excelente libro para entender la historia de la humanidad.', 5),
(8, 95, 'Muy inspirador, me motivó a cambiar mis hábitos.', 5),
(9, 97, 'Una fábula sencilla pero con un mensaje muy poderoso.', 4),
(11, 2, 'Me sorprendió gratamente, no esperaba tanto de este libro.', 4),
(12, 4, 'Un clásico que todo el mundo debería leer al menos una vez.', 5),
(13, 6, 'Una historia conmovedora que te llega al alma.', 5),
(14, 8, 'Me encantó la forma en que se construye el misterio.', 4),
(15, 10, 'Un libro que te transporta a otro mundo.', 5);
