-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 01, 2022 at 09:29 AM
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
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL PRIMARY KEY,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `name`, `email`, `password`) VALUES
(16, 'Nick', 'nick@nick.ch', '$2y$10$/E8Lc0FoICrSlKl.cBRgUOvAR.mJpwI3CN93QUiA.m9wCAc1uM8j.'),
(18, 'Eva', 'eva.ang@gmail.com', '$2y$10$Qrtxsn2fv2LbiC/R5oUEq.BOy3SFxpMMM1xWepjd5gi2lDuxGtLE6'),
(19, 'Nick Schneeberger', 'hallo@nickschnee.ch', '$2y$10$jrZgpHNx0GF0fBq7ALbEmeVE0TAEdgNY6zJuwm4yd7i01RD6Fp0yy'),
(20, 'Blub', 'blub@blub.ch', '$2y$10$V8BNTbmfaz.4B2Y8MYWjDOftzDUhJAEMv/sqqWZ3YS5BwHUnj7Jxa'),
(23, 'Eva Öpfuschmatz', 'eva@?pfuschmatz.ch', '$2y$10$09pR6A8/qGiMCekoYucDke1FJL6ZCrY3HzLhsBTwk09GtsqD44LWa'),
(24, 'Samuel', 'samuel@codecrush.ch', '$2y$10$S02/dbn7KaSdfPFNgRRw0es.TaQCVKqZ5UNI2zAfJWEQg2bgI9FC.'),
(26, 'Nick', 'nickjonas@schneeberger.ch', '$2y$10$mzCD8fNdH20QaUgkiFb3zOPuYr7.Sk.W0C4JxofoABTJXIEnKxYha'),
(27, 'blub', 'blub@blub.com', '$2y$10$NVTnYkrjTv1MGazU5ZxpMeu1FnL5NurYzXCzRclQuCQY7RsnZayke'),
(44, 'Alen Doko', 'alen.doko1111221@hotmail.com', '$2y$10$mGMbBOOLKtsL3RcjTVBYbO9hvFT/JLEN.8gerf0mOYL7uyN6dxyre');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
