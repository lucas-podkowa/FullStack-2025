CREATE DATABASE clinica;

\c clinica;

set search_path TO public;

CREATE TABLE paciente (
    nss bigint not null, 
    nombre varchar(30) not null, 
    apellido varchar(30) not null, 
    domicilio varchar(50), 
    codigo_postal smallint, 
    telefono varchar(16), 
    nro_historial_clinico integer, 
    observaciones text,
    PRIMARY KEY (nro_historial_clinico)
);
CREATE TABLE ingreso (
    id_ingreso serial PRIMARY KEY,
    fecha_ingreso date not null, 
    nro_habitacion smallint, 
    nro_cama smallint, 
    observaciones text,
    nro_historial_paciente integer not null,
    matricula_medico integer not null,
 FOREIGN KEY (nro_historial_paciente) REFERENCES paciente (nro_historial_clinico)
);

CREATE TABLE medico (
    matricula serial, 
    nombre varchar(30), 
    apellido varchar(30), 
    especialidad varchar (20), 
    observaciones text
);

ALTER TABLE medico ADD PRIMARY KEY (matricula);

ALTER TABLE ingreso ADD FOREIGN KEY (matricula_medico) REFERENCES medico(matricula);

INSERT INTO paciente values 
(654165, 'Jose', 'Villagran', 'Arrayanes 1205', 3360, '3755-589478', 4551, null),
(44946, 'Josefina', 'Pereira Dias', 'Calle primera 201', 3363, '3755-587912', 4112, null),
(316619, 'Karen Sophia', 'Burgin', 'Primeros Colonos y Junin', 3640, '3745-998877', 1236, null),
(369844, 'Galadriel', 'Lorien', 'Bareiro 170', 2207, '3943-425561', 3212, null),
(254651, 'Elrond', 'Rivendell', 'Balneario Campo Grande',3350 , '3764-421479', 1884, null),
(971649, 'Glorfindel', 'Arda', 'Terminal esquina Avenida', 3360, '3755-447031', 778, 'realizar PCR en proxima consulta'),
(3648, 'Gimli', 'Moria', 'Juan Manuel de Orquideas 335', 3363, '3755-866545', 1488, null),
(87164, 'Legolas', 'Bosque Negro', 'Krause y Villavieja', 3514, '3971-544444', 1498, 'historial de cardiopatias'),
(32197, 'Aewin', 'Rohan', 'Valinor 1001', 2366, '3274-232336', 675, null);

INSERT INTO medico(matricula, nombre, apellido, especialidad, observaciones) VALUES 
	(774, 'Alfonso', 'Chamorro', 'Cardiología', ''),
	(449, 'Ricardo', 'Puchini', 'Medicina Familiar', 'medico clinico general'),
	(888, 'Pedro Pablo', 'Cichanowski', 'Urología', 'actualmente con licencia por covid'),
	(332, 'Jesus Maria', 'Prates', 'Cirugía', ''),
	(155, 'Alfredo', 'Gutierrez', 'Medicina Familiar', 'No atiende PAMI'),
	(645, 'Cacho', 'Villa', 'Oftalmología', ''),
	(221, 'Luisa ', 'Foseca', 'Cardiología', ''),
	(334, 'Gandalf', 'Meriadoc', 'Infectología', ''),
	(733, 'Tatiana', 'Brandigamo', 'Pediatría', ''),
	(226, 'Frodo', 'Bolson', 'Pediatría', 'Solamente turno tarde');
	
INSERT INTO ingreso(fecha_ingreso, nro_habitacion, nro_cama, observaciones, nro_historial_paciente, matricula_medico) VALUES
('2021-11-01', 1, 2, '', 1884, 449 ),
('2021-11-02', 1, 1, '', 1488, 226),
('2021-11-02', 2, 4, 'Falta completar carnet de vacunacion', 1498, 733),
('2021-11-03', 1, 2, '', 4551, 774),
('2021-11-05', 4, 7, '', 4112, 645),
('2021-11-15', 5, 9, '', 1236, 226),
('2021-11-17', 5, 10, '', 675, 774),
('2021-12-09', 3, 6, '', 778, 888),
('2021-12-11', 4, 8, 'Solicitar electrocardiograma', 4112, 332),
('2021-12-11', 2, 3, '', 3212, 774),
('2021-12-18', 2, 4, '', 778, 334),
('2021-12-22', 1, 1, '', 1488, 155),
('2022-01-04', 9, 17, '', 1236, 645),
('2022-01-11', 5, 9, '', 675, 226),
('2022-01-12', 4, 8, '', 3212, 155),
('2022-01-16', 8, 16, '', 1236, 226),
('2022-01-24', 2, 3, '', 1488, 888),
('2022-02-01', 8, 15, '', 3212, 334),
('2022-02-14', 1, 2, '', 1884, 449 ),
('2022-02-15', 7, 13, '', 4112, 888),
('2022-03-02', 3, 5, '', 675, 155),
('2022-03-07', 8, 12, '', 4551, 334),
('2022-03-13', 3, 6, '', 1498, 645),
('2022-03-16', 9, 18, '', 675, 155),
('2022-03-19', 5, 9, '', 4112, 774),
('2022-03-22', 6, 11, 'Cuenta con servicio integral de reabilitacion', 1498, 332),
('2022-03-22', 3, 6, '', 1884, 332),
('2022-03-22', 5, 10, '', 778, 449),
('2022-03-23', 1, 1, '', 4112, 155),
('2022-03-25', 3, 6, '', 1236, 226),
('2022-03-29', 2, 4, '', 3212, 645),
('2022-03-30', 9, 17, '', 4112, 155),
('2022-04-05', 6, 11, 'Internacion por deshidratacion', 1488, 733),
('2022-04-07', 7, 13, '', 4551, 774);

