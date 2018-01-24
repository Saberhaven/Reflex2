-- phpMyAdmin SQL Dump
-- version 4.2.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 24, 2018 at 12:31 PM
-- Server version: 5.5.56-MariaDB
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `reflexkms`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `cat1` varchar(50) NOT NULL,
  `cat2` varchar(50) NOT NULL,
  `catid1` int(11) NOT NULL,
  `catid2` int(11) NOT NULL,
  `fullcatid` int(10) NOT NULL,
  `deptid` int(3) NOT NULL,
  `catrole` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cat1`, `cat2`, `catid1`, `catid2`, `fullcatid`, `deptid`, `catrole`) VALUES
('Point of Sale', 'VeriFone Ruby', 10000, 1, 10001, 1, 'Tech Support 1'),
('Point of Sale', 'VeriFone Sapphire', 10000, 2, 10002, 1, 'Tech Support 1'),
('Point of Sale', 'Verifone Ruby / Saphhire', 10000, 3, 10003, 1, 'Tech Support 1'),
('Point of Sale', 'VeriFone VX570', 10000, 4, 10004, 1, 'Tech Support 1'),
('Point of Sale', 'VeriFone Topaz', 10000, 5, 10005, 1, 'Tech Support 1'),
('Point of Sale', 'Gilbarco Passport', 10000, 6, 10006, 1, 'Tech Support 1'),
('Point of Sale', 'Wayne', 10000, 7, 10007, 1, 'Tech Support 1'),
('Point of Sale', 'Pin Pads', 10000, 8, 10008, 1, 'Tech Support 1'),
('Point of Sale', 'Instacredit', 10000, 9, 10009, 1, 'Tech Support 1'),
('Point of Sale', 'VeriFone Commander', 10000, 10, 10010, 1, 'Tech Support 1'),
('Point of Sale', 'NCR', 10000, 11, 10011, 1, 'Tech Support 1'),
('Point of Sale', 'VeriFone VX520', 10000, 12, 10012, 1, 'Tech Support 1'),
('Communications', 'General', 30000, 6, 30006, 1, 'Tech Support 1'),
('Communications', 'Acumera', 30000, 7, 30007, 1, 'Tech Support 2'),
('Communications', 'TNS', 30000, 9, 30009, 1, 'Tech Support 1'),
('Communications', 'Sagenet', 30000, 10, 30010, 1, 'User'),
('System', 'Rams', 40000, 1, 40001, 1, 'Tech Support 1'),
('System', 'Client Line', 40000, 2, 40002, 1, 'Tech Support 1'),
('System', 'Heat', 40000, 3, 40003, 1, 'Tech Support 1'),
('System', 'ValueLink', 40000, 4, 40004, 1, 'Tech Support 1'),
('System', 'SpaceNet Portal', 40000, 5, 40005, 1, 'Tech Support 1'),
('System', 'TNS Portal', 40000, 6, 40006, 1, 'Tech Support 1'),
('System', 'Jobber Portal', 40000, 7, 40007, 1, 'Tech Support 1'),
('System', 'Fleet Portal', 40000, 8, 40008, 1, 'Tech Support 1'),
('System', 'Reflex', 40000, 9, 40009, 1, 'Tech Support 1'),
('System', 'Gift Cards', 40000, 10, 40010, 1, 'Tech Support 1'),
('System', 'Data Warehouse', 40000, 11, 40011, 1, 'Tech Support 1'),
('System', 'Terminal', 40000, 12, 40012, 1, 'Tech Support 1'),
('System', 'EPS', 40000, 13, 40013, 1, 'Tech Support 1'),
('System', 'Level 3', 40000, 14, 40014, 1, 'Tech Support 2'),
('Financial', 'Sale Not Captured', 50000, 1, 50001, 1, 'Tech Support 1'),
('Financial', 'Out of Balance', 50000, 2, 50002, 1, 'Tech Support 1'),
('Financial', 'Susser Balancing', 50000, 3, 50003, 1, 'Tech Support 1'),
('Financial', 'Manuals', 50000, 4, 50004, 1, 'Tech Support 1'),
('Financial', 'Chargebacks', 50000, 5, 50005, 1, 'Tech Support 1'),
('Financial', 'Credit Cards', 50000, 6, 50006, 1, 'Tech Support 1'),
('Financial', 'Billing', 50000, 7, 50007, 1, 'Tech Support 1'),
('Misc', 'Guides', 60000, 1, 60001, 1, 'Tech Support 1'),
('Misc', 'Direction', 60000, 2, 60002, 1, 'Tech Support 1'),
('Misc', 'Prescreen', 60000, 3, 60003, 1, 'User'),
('UK Support', 'Procedures', 80000, 1, 80001, 1, 'UK Support 1'),
('UK Support', 'Information', 80000, 2, 80002, 1, 'UK Support 1'),
('UK Support', 'Devices', 80000, 3, 80003, 1, 'UK Support 1'),
('UK Support', 'UKCS', 80000, 4, 80004, 1, 'UK Support 1'),
('UK Support', 'UK Frequently Asked Questions', 80000, 5, 80005, 1, 'UK Support 1'),
('UK Support', 'Contacts', 80000, 6, 80006, 1, 'UK Support 1'),
('UK Support', 'Troubleshooting', 80000, 7, 80007, 1, 'Administrator'),
('RAMS', 'Shift', 90000, 1, 90001, 2, 'User'),
('RAMS', 'On Call Fixes', 90000, 2, 90002, 2, 'RAMS DEVELOPMENT'),
('RAMS', 'Training', 90000, 3, 90003, 2, 'IS User'),
('SQL', 'Reference', 100000, 1, 100001, 2, 'IS User'),
('Merlin', 'Videos', 110000, 1, 110001, 2, 'IS User'),
('Allocations', 'General', 120000, 1, 120001, 1, 'Allocations');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
 ADD PRIMARY KEY (`fullcatid`), ADD KEY `deptid` (`deptid`), ADD KEY `catid1` (`catid1`), ADD KEY `catid2` (`catid2`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`deptid`) REFERENCES `department` (`deptid`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
