
CREATE SCHEMA IF NOT EXISTS `clinica` DEFAULT CHARACTER SET utf8 ;
USE `clinica` ;

-- -----------------------------------------------------
-- Table `clinica`.`medico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica`.`medico` (
  `matricula` INT NOT NULL,
  `nombre` VARCHAR(30) NOT NULL,
  `apellido` VARCHAR(30) NOT NULL,
  `especialidad` VARCHAR(20) NOT NULL,
  `observaciones` TEXT NULL,
  PRIMARY KEY (`matricula`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clinica`.`paciente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica`.`paciente` (
  `nss` BIGINT(20) NOT NULL,
  `nombre` VARCHAR(30) NOT NULL,
  `apellido` VARCHAR(30) NOT NULL,
  `domicilio` VARCHAR(50) NOT NULL,
  `cod_postal` SMALLINT(6) NOT NULL,
  `telefono` VARCHAR(16) NULL,
  `nro_historial_clinico` INT(11) NOT NULL,
  `observaciones` TEXT NULL,
  PRIMARY KEY (`nro_historial_clinico`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clinica`.`ingreso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica`.`ingreso` (
  `id_ingreso` INT(11) NOT NULL,
  `fecha_ingreso` DATE NOT NULL,
  `nro_habitacion` SMALLINT(6) NOT NULL,
  `nro_cama` SMALLINT(6) NOT NULL,
  `observaciones` TEXT NULL,
  `paciente_nro_historial_clinico` INT(11) NOT NULL,
  `medico_matricula` INT(11) NOT NULL,
  PRIMARY KEY (`id_ingreso`),
  INDEX `fk_ingreso_paciente1_idx` (`paciente_nro_historial_clinico` ASC) ,
  INDEX `fk_ingreso_medico1_idx` (`medico_matricula` ASC) ,
  CONSTRAINT `fk_ingreso_paciente1`
    FOREIGN KEY (`paciente_nro_historial_clinico`)
    REFERENCES `clinica`.`paciente` (`nro_historial_clinico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ingreso_medico1`
    FOREIGN KEY (`medico_matricula`)
    REFERENCES `clinica`.`medico` (`matricula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



