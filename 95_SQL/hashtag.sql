-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 01, 2022 at 09:01 AM
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
-- Table structure for table `hashtag`
--

CREATE TABLE `hashtag` (
  `ID` int(11) NOT NULL,
  `hashtag` varchar(42) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hashtag`
--

INSERT INTO `hashtag` (`ID`, `hashtag`) VALUES
(1, 'chur'),
(2, 'bern'),
(3, 'zürich'),
(4, 'relax'),
(5, 'work'),
(6, 'studierende'),
(7, 'landleben'),
(8, 'bigcitylife'),
(9, 'penthouse'),
(10, 'altbau'),
(11, 'cheminee'),
(12, 'spieleabende');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hashtag`
--
ALTER TABLE `hashtag`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hashtag`
--
ALTER TABLE `hashtag`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
