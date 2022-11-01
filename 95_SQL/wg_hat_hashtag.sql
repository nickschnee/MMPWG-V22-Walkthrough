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
-- Table structure for table `wg_hat_hashtag`
--

CREATE TABLE `wg_hat_hashtag` (
  `ID` int(11) NOT NULL,
  `wg_id` int(11) NOT NULL,
  `hashtag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wg_hat_hashtag`
--

INSERT INTO `wg_hat_hashtag` (`ID`, `wg_id`, `hashtag_id`) VALUES
(21, 23, 1),
(33, 23, 2),
(34, 27, 1),
(35, 27, 2),
(36, 28, 2),
(69, 36, 1),
(77, 37, 2),
(78, 37, 8),
(79, 37, 9),
(96, 38, 4),
(97, 38, 5),
(98, 38, 6),
(99, 38, 11),
(100, 38, 7),
(109, 0, 4),
(110, 0, 5),
(128, 35, 7),
(129, 35, 11),
(130, 35, 3),
(131, 35, 8),
(132, 35, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wg_hat_hashtag`
--
ALTER TABLE `wg_hat_hashtag`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wg_hat_hashtag`
--
ALTER TABLE `wg_hat_hashtag`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
