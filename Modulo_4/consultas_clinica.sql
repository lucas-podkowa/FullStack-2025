-- a) Agregar un nuevo paciente en la base de datos con los siguientes datos:
-- nss = 22558, nombre = Antonio, apellido = Magallanes, domicilio = Dos Pindo 260, codigo_postal =
-- 3640, telefono = null, nro_historial_clinico = 1932, observaciones = null)

				insert into paciente(nss,nombre,apellido,domicilio,cod_postal,nro_historial_clinico) 
				values(22558,"Antonio","Magallanes","Dos Pindo 260",3640,1932);

-- b) Actualizar el numero de teléfono de éste ultimo paciente agregado, asignando el dato: 3745-589174

				update paciente set telefono = "3745-589174" 
				where nro_historial_clinico = 1932;

-- c) Obtener un listado con una columna llamada “paciente” donde aparezca el apellido y nombre de cada
-- paciente separado por una coma luego del apellido, y una segunda columna llamada
-- “observacion_registrada” donde aparezca su correspondiente observación. En dicho listado solamente
-- deben aparecer los pacientes con alguna observación.

				select concat(apellido , ", ", nombre ) as paciente , observaciones as observacion_registrada 
				from paciente 
				where observaciones != ""; 

-- d) Listar los pacientes (apellido y nombre separado por una coma en una sola columna) junto a la
-- especialidad requerida en cada uno de los ingresos registrados en la base de datos.

				select concat(paciente.apellido, ', ', paciente.nombre) as paciente, medico.especialidad as especialidad
				from paciente 
				join ingreso  on paciente.nro_historial_clinico = ingreso.paciente_nro_historial_clinico
				join medico  on ingreso.medico_matricula = medico.matricula;

-- e) Eliminar de la base de datos aquellos médicos que no hay sido solicitados por ningún paciente.

				delete from medico
				where matricula not in (
				   select medico_matricula
				   from ingreso
				);

-- f) Obtener una tabla con dos columnas, donde la primera corresponda al numero de cama y la segunda,
-- llamada "usos" que corresponda a la cantidad de veces que se ha utilizado dicha cama en los ingresos.
-- Dichos datos debes estar ordenados de mayor a menor en cuanto a la cantidad de usos.

				select nro_cama , count(nro_cama) as usos
				from ingreso
				group by nro_cama
                order by count(nro_cama) desc;

-- g) Mostrar una lista ordenada con el apellido y nombre del paciente junto la cantidad de veces que ha
-- realizado un ingreso, el listado solamente debe mostrar aquellos pacientes que hayan realizado al menos
-- 4 (cuatro) ingresos a la clínica.

				
				select CONCAT(paciente.apellido, ', ', paciente.nombre) as paciente, count(ingreso.paciente_nro_historial_clinico) as ingresos from paciente 
				join ingreso on paciente.nro_historial_clinico = ingreso.paciente_nro_historial_clinico
				group by paciente.apellido
				having count(ingreso.paciente_nro_historial_clinico) >= 4
                order by count(ingreso.paciente_nro_historial_clinico) desc;