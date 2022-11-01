-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 01, 2022 at 08:54 AM
-- Server version: 10.3.31-MariaDB-0+deb10u1
-- PHP Version: 7.0.33-57+0~20211119.61+debian10~1.gbp5d8ba5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `376009_17_1`
--

-- --------------------------------------------------------

--
-- Table structure for table `wg`
--

CREATE TABLE `wg` (
  `ID` int(11) NOT NULL,
  `titel` varchar(100) NOT NULL,
  `bild` varchar(100) NOT NULL,
  `adresse` varchar(200) NOT NULL,
  `stadt` int(11) NOT NULL,
  `beschreibung` text NOT NULL,
  `user` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wg`
--

INSERT INTO `wg` (`ID`, `titel`, `bild`, `adresse`, `stadt`, `beschreibung`, `user`, `status`, `timestamp`) VALUES
(27, 'Hallo', 'https://thishousedoesnotexist.org/assets/houses/1389612.png?_1662424062', 'Meine WG', 1, ' \r\nThis stunning modern home is located in Santorini, Greece, and offers breathtaking views of the sunrise over downtown. The exterior is designed with exposed timber, glass, and rocks, and features a steaming hot spring outside. The house is perfect for relaxing and enjoying the incredible natural scenery. Designed by THDNE AI. ', 18, 1, '2022-09-12 16:16:11'),
(28, 'Nick WG', 'https://thishousedoesnotexist.org/assets/houses/5064608.png?_1662424507', 'Nickstrasse 44, 3000 Bern', 1, '  This stunning house is designed to make the most of its stunning location with sunset views. The house is built with a mix of wood, glass, and stone, and features an exposed wood interior and a glass-enclosed staircase. Designed by THDNE AI. ', 19, 1, '2022-09-12 16:24:04'),
(35, 'WG in altem Bauernhaus', 'https://thishousedoesnotexist.org/assets/houses/7145806.png?_1662432627', 'Strassengässchen 12', 1, ' This house is designed with an exterior of exposed wood and curved bamboo. Rocks from the nearby river are used to accent the front of the house. Designed by THDNE AI. lalala', 16, 1, '2022-09-13 09:05:17'),
(36, 'WG zur Rebleuten', 'https://thishousedoesnotexist.org/assets/houses/6234368.png?_1662432515', 'Kupfergasse', 2, ' Das ist unsere WG im modernen Baustil aus den 90ern. Bemerkenswert ist vor allem unser gute Heizwert, da es im Innenraum kaum Durchzug gibt und somit mit dem Standard Minergie+ viele Kosten gespart werden können. Wir mögen alle Privatsphäre, daher sind wir mitten im Dschungel von Chur - mit wunderbarer Aussicht auf den Machu Picchu.', 24, 1, '2022-09-13 12:09:12'),
(37, 'Villa Bümpliz', 'https://thishousedoesnotexist.org/assets/houses/8096236.png?_1662432758', 'Bümplizstrasse 23, 3007 Bern', 2, 'This is a new house in Bümpliz, Bern that is made mostly of wood and stone. It is designed with an exposed wood exterior and bamboo rocks.', 26, 0, '2022-09-13 15:11:35'),
(38, 'Grand Ressort Blub', 'https://thishousedoesnotexist.org/assets/houses/9909364.png?_1663274644', 'Rorschacherstrasse 2', 3, ' Beste WG der Welt!', 27, 0, '2022-09-16 12:49:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wg`
--
ALTER TABLE `wg`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `stadt` (`stadt`),
  ADD KEY `user` (`user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wg`
--
ALTER TABLE `wg`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `wg`
--
ALTER TABLE `wg`
  ADD CONSTRAINT `wg_ibfk_1` FOREIGN KEY (`stadt`) REFERENCES `stadt` (`ID`),
  ADD CONSTRAINT `wg_ibfk_2` FOREIGN KEY (`user`) REFERENCES `user` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
