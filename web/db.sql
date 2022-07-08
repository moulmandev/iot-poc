CREATE DATABASE IF NOT EXISTS `iot-poc`;

USE `iot-poc`;

CREATE TABLE IF NOT EXISTS `engine` (
  `adresseMac` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `temperature` varchar(4) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`adresseMac`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `regle` (
  `id` int(11) NOT NULL,
  `idEngine` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `start` varchar(50) DEFAULT NULL,
  `end` varchar(50) DEFAULT NULL,
  `temperature` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;