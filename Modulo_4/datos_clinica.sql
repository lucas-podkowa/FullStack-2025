-- Insertar datos a las tablas

INSERT INTO medico(matricula,nombre,apellido,especialidad,observaciones) 
values(155,"Alfredo","Gutierrez","Medicina Familiar","No atiende PAMI"),
(221,"Luisa","Foseca","Cardiologia",""),
(226,"Frodo","Bolson","Pediatria","Solamente turno tarde"),
(332,"Jesus Maria","Prates","Cirugia",""),
(334,"Gandalf","Meriadoc","Infectologia",""),
(449,"Ricardo","Puchini","Medicina Familiar","medico clinico general"),
(645,"Cacho","Villa","Oftalmologia",""),
(733,"Tatiana","Brandigamo","Pediatria",""),
(774,"Alfonso","Chamorro","CArdiologia",""),
(888,"Pedro Pablo","Cichanowski","Urologia","actualmente con licencia por covid");



INSERT INTO paciente(nss,nombre,apellido,domicilio,cod_postal,telefono,nro_historial_clinico,observaciones) 
values(32197,"Ahewin","Rohan","Valinor 1001",2366,"3274-232336",675,""),
(971649,"Glorfindel","Arda","Terminal esquina Avenida",3360,"3755-447031",778,"realizar PCR"),
(316619, "Karen Sophia", "Burgin" ,"Primeros Colonos y Junin",3640,"3745-998877",1236,""),
(3648, "Gimli", "Moria","Juan Manuel de Orquideas 335", 3363, "3755-866545", 1488,""),
(87164, "Legolas", "Bosque Negro", "Krause y Villavieja", 3514, "3971-544444", 1498, "historial de cardiopatias"),
(254651, "Elrond","Rivendell", "Balneario Campo Grande", 3350, "3764-421479", 1884,""),
(369844, "Galadriel", "Lorien", "Bareiro 170", 2207, "3943-425561", 3212,""),
(44946, "Josefina" ,"Pereira Dias" ,"Calle primera 201", 3363, "3755-587912" ,4112,""),
(654165, "Jose","Villagran", "Arrayanes 1205", 3360, "3755-589478", 4551,"");


INSERT INTO ingreso(id_ingreso,fecha_ingreso,nro_habitacion,nro_cama,observaciones,paciente_nro_historial_clinico,medico_matricula) 
values(1,"2021-11-1",1,2,"",675,155),
(2, "2021-11-2", 1, 1,"", 1488 ,226),
(3, "2021-11-2", 2 ,4, "Falta completar carnet de vacunacion" ,1498 ,733),
(4,"2021-11-3",1 ,2,"", 4551, 774),
(5, "2021-11-5",4 ,7,"", 4112, 645),
(6 ,"2021-11-15" ,5 ,9 ,"",1236 ,226),
(7, "2021-11-17",5 ,10,"", 675 ,774),
(8, "2021-12-9" ,3 ,6,"", 778 ,888),
(9, "2021-12-11",4, 8, "Solicitar electrocardiograma", 4112 ,332),
(10, "2021-12-11",2, 3,"", 3212, 774),
(11, "2021-12-18",2, 4,"", 778, 334),
(12, "2021-12-22", 1 ,1,"", 1488, 155),
(13, "2022-1-4",9 ,17,"", 1236, 645),
(14, "2022-1-11",5, 9,"", 675, 226),
(15, "2022-1-12",4, 8,"", 3212, 155),
(16, "2022-1-16",8, 16,"", 1236, 226),
(17, "2022-1-14",2, 3,"", 1488, 888),
(18, "2022-2-1",8, 15,"", 3212, 334),
(19, "2022-2-14",1, 2,"", 1884, 449),
(20, "2022-2-15",7, 13,"",4112, 888),
(21,"2022-3-2",3, 5,"", 675, 155),
(22,"2022-3-7",8, 12,"", 4551, 334),
(23, "2022-3-13",3, 6,"", 1498, 645),
(24, "2022-3-16", 9 ,18,"", 675, 155),
(25, "2022-3-19", 5, 9,"", 4112, 774),
(26, "2022-3-22",6, 11, "Cuenta con servicio integral de rehabilitacion", 1498, 332),
(27, "2022-3-22",3, 6,"", 1884, 332),
(28, "2022-3-22",5, 10,"", 778, 449),
(29, "2022-3-23",1, 1,"", 4112, 155),
(30, "2022-3-25",3, 6,"", 1236, 226),
(31, "2022-3-29",2, 4 , "",3212, 645),
(32, "2022-3-30",9 ,17,"", 4112, 155),
(33, "2022-4-5",6, 11, "Internacion por deshidratacion" ,1488, 733),
(34, "2022-4-7",7 ,13 ,"",4551 ,774);
