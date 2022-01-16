-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: remedial_teaching
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Admins`
--

DROP TABLE IF EXISTS `Admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Admins.username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admins`
--

LOCK TABLES `Admins` WRITE;
/*!40000 ALTER TABLE `Admins` DISABLE KEYS */;
INSERT INTO `Admins` VALUES (2,'admin','admin',0,'admin12345qwerty','adminremedial'),(3,'tia','admin',0,'tiaherdi12345qwerty','admintiaherdi'),(4,'rizal','admin',0,'rizal12345qwerty','rizaladminremedial'),(5,'Test','admins',0,'test123','test1'),(8,'Test','admins',0,'test123','test6'),(10,'Rizal Muharam','admins',0,'12345','RizalTest'),(11,'Rizalhehe','admins',0,'12345','Rizalhehe'),(12,'NewAdmin','admins',0,'newAdmin','newAdmin'),(13,'a','admins',0,'a','a'),(14,'12345678','admins',0,'12345678','12345678');
/*!40000 ALTER TABLE `Admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BoardExam`
--

DROP TABLE IF EXISTS `BoardExam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BoardExam` (
  `id` int NOT NULL AUTO_INCREMENT,
  `studentId` int NOT NULL,
  `nilai` int NOT NULL,
  `created_At` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `studentId` (`studentId`),
  CONSTRAINT `BoardExam_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BoardExam`
--

LOCK TABLES `BoardExam` WRITE;
/*!40000 ALTER TABLE `BoardExam` DISABLE KEYS */;
INSERT INTO `BoardExam` VALUES (1,17,10,'2022-01-16 13:57:01.186'),(2,17,10,'2022-01-16 13:57:30.962'),(3,17,10,'2022-01-16 14:00:28.799'),(4,17,10,'2022-01-16 14:02:23.121'),(5,17,10,'2022-01-16 14:02:50.072'),(6,17,10,'2022-01-16 14:02:51.410'),(7,17,10,'2022-01-16 14:03:29.375'),(8,17,10,'2022-01-16 14:04:11.630'),(9,17,10,'2022-01-16 14:04:52.807'),(10,17,10,'2022-01-16 14:05:10.301'),(11,17,10,'2022-01-16 14:11:51.233'),(12,17,10,'2022-01-16 14:13:35.561'),(13,17,10,'2022-01-16 14:15:24.555'),(14,17,10,'2022-01-16 14:16:04.351'),(15,17,10,'2022-01-16 14:19:06.209'),(16,17,10,'2022-01-16 14:20:55.318'),(17,17,10,'2022-01-16 14:23:09.713'),(18,17,10,'2022-01-16 14:23:31.149'),(19,17,10,'2022-01-16 14:23:41.401'),(20,17,10,'2022-01-16 14:24:03.386'),(21,17,10,'2022-01-16 14:24:45.816'),(22,17,10,'2022-01-16 14:25:12.552'),(23,17,10,'2022-01-16 14:26:03.925'),(24,17,10,'2022-01-16 14:34:03.850'),(25,17,10,'2022-01-16 14:34:11.996'),(26,17,10,'2022-01-16 14:35:29.462'),(27,17,10,'2022-01-16 14:35:31.214'),(28,17,10,'2022-01-16 14:35:56.976'),(29,17,10,'2022-01-16 14:36:13.987'),(30,17,10,'2022-01-16 14:36:19.589'),(31,17,50,'2022-01-16 14:41:58.566'),(32,17,50,'2022-01-16 14:42:47.035'),(33,17,50,'2022-01-16 14:43:22.960'),(34,18,50,'2022-01-16 14:43:47.956'),(35,18,50,'2022-01-16 15:00:07.267'),(36,18,50,'2022-01-16 15:02:34.971'),(37,19,50,'2022-01-16 15:09:16.215'),(38,19,80,'2022-01-16 15:13:31.490'),(39,20,50,'2022-01-16 15:17:09.518'),(40,20,80,'2022-01-16 15:18:14.809'),(41,18,50,'2022-01-16 15:23:10.192'),(42,21,50,'2022-01-16 21:20:00.010'),(43,21,100,'2022-01-16 21:33:04.502'),(44,22,50,'2022-01-16 21:44:30.088'),(45,22,100,'2022-01-16 21:45:27.678');
/*!40000 ALTER TABLE `BoardExam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BoardTryOut`
--

DROP TABLE IF EXISTS `BoardTryOut`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BoardTryOut` (
  `id` int NOT NULL AUTO_INCREMENT,
  `studentId` int NOT NULL,
  `nilai` int NOT NULL,
  `created_At` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `studentId` (`studentId`),
  CONSTRAINT `BoardTryOut_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BoardTryOut`
--

LOCK TABLES `BoardTryOut` WRITE;
/*!40000 ALTER TABLE `BoardTryOut` DISABLE KEYS */;
INSERT INTO `BoardTryOut` VALUES (1,16,0,'2022-01-16 09:25:21.968'),(2,18,0,'2022-01-16 10:06:20.644'),(3,18,0,'2022-01-16 10:09:13.657'),(4,18,0,'2022-01-16 10:09:32.809'),(5,18,0,'2022-01-16 10:11:16.548'),(6,18,0,'2022-01-16 10:11:55.091'),(7,18,0,'2022-01-16 10:12:01.408'),(8,18,0,'2022-01-16 10:14:34.693'),(9,18,0,'2022-01-16 10:14:40.643'),(10,18,0,'2022-01-16 10:14:46.378'),(11,18,0,'2022-01-16 10:15:22.743'),(12,18,0,'2022-01-16 10:15:26.712'),(13,18,0,'2022-01-16 10:15:30.887'),(14,18,0,'2022-01-16 10:21:25.016'),(15,18,0,'2022-01-16 10:21:28.694'),(16,18,0,'2022-01-16 10:21:32.237'),(17,18,0,'2022-01-16 10:22:30.204'),(18,18,0,'2022-01-16 10:22:33.604'),(19,18,0,'2022-01-16 10:22:37.319'),(20,18,0,'2022-01-16 10:23:51.387'),(21,18,0,'2022-01-16 10:23:55.309'),(22,18,0,'2022-01-16 10:23:59.404'),(23,18,0,'2022-01-16 10:24:42.322'),(24,18,0,'2022-01-16 10:24:46.010'),(25,18,0,'2022-01-16 10:24:49.823'),(26,18,0,'2022-01-16 10:26:41.730'),(27,18,0,'2022-01-16 10:26:45.189'),(28,18,0,'2022-01-16 10:26:48.691'),(29,18,0,'2022-01-16 10:28:38.319'),(30,18,0,'2022-01-16 10:28:41.790'),(31,18,0,'2022-01-16 10:28:46.408'),(32,18,0,'2022-01-16 10:29:30.577'),(33,18,0,'2022-01-16 10:29:34.248'),(34,18,0,'2022-01-16 10:29:37.972'),(35,18,0,'2022-01-16 10:30:28.778'),(36,18,0,'2022-01-16 10:30:32.488'),(37,18,0,'2022-01-16 10:30:35.422'),(38,18,0,'2022-01-16 10:31:01.319'),(39,18,0,'2022-01-16 10:31:05.881'),(40,18,0,'2022-01-16 10:31:10.089'),(41,18,0,'2022-01-16 10:32:07.122'),(42,18,0,'2022-01-16 10:32:10.487'),(43,18,0,'2022-01-16 10:32:14.052'),(44,18,0,'2022-01-16 10:34:50.161'),(45,18,0,'2022-01-16 10:34:54.918'),(46,18,0,'2022-01-16 10:35:07.857'),(47,18,0,'2022-01-16 10:35:14.552'),(48,18,100,'2022-01-16 10:40:01.436'),(49,17,0,'2022-01-16 13:48:00.667'),(50,17,0,'2022-01-16 13:48:34.439'),(51,17,0,'2022-01-16 13:49:21.073'),(52,17,0,'2022-01-16 13:50:14.314'),(53,17,0,'2022-01-16 13:53:08.909'),(54,17,0,'2022-01-16 13:53:47.550'),(55,17,0,'2022-01-16 13:54:02.290'),(56,18,100,'2022-01-16 14:47:05.031'),(57,19,0,'2022-01-16 15:08:33.771'),(58,19,50,'2022-01-16 15:08:38.991'),(59,19,0,'2022-01-16 15:09:30.103'),(60,19,0,'2022-01-16 15:12:56.999'),(61,19,0,'2022-01-16 15:12:59.699'),(62,19,0,'2022-01-16 15:13:02.129'),(63,19,100,'2022-01-16 15:13:15.993'),(64,20,50,'2022-01-16 15:16:45.861'),(65,20,0,'2022-01-16 15:17:37.969'),(66,20,0,'2022-01-16 15:17:41.114'),(67,20,0,'2022-01-16 15:17:45.189'),(68,20,0,'2022-01-16 15:17:58.313'),(69,20,0,'2022-01-16 15:18:01.128'),(70,20,100,'2022-01-16 15:18:03.839'),(71,17,0,'2022-01-16 21:08:54.204'),(72,21,0,'2022-01-16 21:15:07.965'),(73,21,0,'2022-01-16 21:15:14.479'),(74,21,0,'2022-01-16 21:15:18.033'),(75,21,50,'2022-01-16 21:15:51.613'),(76,21,0,'2022-01-16 21:20:17.634'),(77,21,0,'2022-01-16 21:20:24.467'),(78,21,0,'2022-01-16 21:20:28.419'),(79,21,0,'2022-01-16 21:20:34.460'),(80,21,0,'2022-01-16 21:20:59.096'),(81,21,0,'2022-01-16 21:21:07.648'),(82,21,0,'2022-01-16 21:21:59.097'),(83,21,0,'2022-01-16 21:22:12.217'),(84,21,0,'2022-01-16 21:23:24.859'),(85,21,0,'2022-01-16 21:25:06.318'),(86,21,0,'2022-01-16 21:27:11.180'),(87,21,0,'2022-01-16 21:27:44.706'),(88,21,0,'2022-01-16 21:28:05.714'),(89,21,0,'2022-01-16 21:28:10.775'),(90,21,0,'2022-01-16 21:29:28.290'),(91,21,0,'2022-01-16 21:30:05.073'),(92,21,0,'2022-01-16 21:31:36.656'),(93,21,0,'2022-01-16 21:31:52.422'),(94,21,0,'2022-01-16 21:32:26.550'),(95,21,0,'2022-01-16 21:32:29.701'),(96,21,0,'2022-01-16 21:32:32.887'),(97,21,0,'2022-01-16 21:32:47.649'),(98,21,100,'2022-01-16 21:32:51.970'),(99,22,0,'2022-01-16 21:43:40.220'),(100,22,0,'2022-01-16 21:43:44.325'),(101,22,0,'2022-01-16 21:43:47.960'),(102,22,50,'2022-01-16 21:44:11.347'),(103,22,0,'2022-01-16 21:44:52.804'),(104,22,0,'2022-01-16 21:44:56.019'),(105,22,0,'2022-01-16 21:44:59.540'),(106,22,0,'2022-01-16 21:45:10.407'),(107,22,100,'2022-01-16 21:45:13.079');
/*!40000 ALTER TABLE `BoardTryOut` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contracts`
--

DROP TABLE IF EXISTS `Contracts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contracts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_student` int NOT NULL,
  `id_subject` int NOT NULL,
  `status` int NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_student` (`id_student`),
  KEY `id_subject` (`id_subject`),
  CONSTRAINT `Contracts_ibfk_1` FOREIGN KEY (`id_student`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Contracts_ibfk_2` FOREIGN KEY (`id_subject`) REFERENCES `Subject_matterials` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contracts`
--

LOCK TABLES `Contracts` WRITE;
/*!40000 ALTER TABLE `Contracts` DISABLE KEYS */;
INSERT INTO `Contracts` VALUES (52,13,2,0,0),(53,13,1,0,0),(54,14,2,0,0),(55,14,1,0,0),(56,15,1,0,0),(57,15,2,0,0),(58,16,1,0,0),(59,16,2,0,0),(60,17,2,0,0),(61,17,1,0,0),(62,18,1,0,0),(63,18,2,0,0),(64,19,2,0,0),(65,19,1,0,0),(66,20,2,0,0),(67,20,1,0,0),(68,21,1,0,0),(69,21,2,0,0),(70,22,1,0,0),(71,22,2,0,0);
/*!40000 ALTER TABLE `Contracts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Detail_Contract`
--

DROP TABLE IF EXISTS `Detail_Contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Detail_Contract` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_indicators` int NOT NULL,
  `id_contract` int NOT NULL,
  `attempt` int NOT NULL,
  `status` int NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_contract` (`id_contract`),
  CONSTRAINT `Detail_Contract_ibfk_1` FOREIGN KEY (`id_contract`) REFERENCES `Contracts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Detail_Contract`
--

LOCK TABLES `Detail_Contract` WRITE;
/*!40000 ALTER TABLE `Detail_Contract` DISABLE KEYS */;
INSERT INTO `Detail_Contract` VALUES (5,7,52,17,2,0),(6,1,53,17,2,0),(7,9,55,0,2,0),(8,10,54,0,2,0),(9,9,56,0,2,0),(10,10,57,0,2,0),(11,9,58,5,2,0),(12,10,59,5,2,0),(13,10,60,1,2,0),(14,9,61,1,2,0),(15,9,62,54,4,0),(16,10,63,55,0,0),(17,10,64,7,4,0),(18,9,65,2,4,0),(19,10,66,6,4,0),(20,9,67,1,4,0),(21,9,68,4,4,0),(22,10,69,23,4,0),(23,9,70,5,4,0),(24,10,71,4,4,0);
/*!40000 ALTER TABLE `Detail_Contract` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Diagnostik_answers`
--

DROP TABLE IF EXISTS `Diagnostik_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Diagnostik_answers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_student` int NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_At` datetime(3) NOT NULL,
  `id_question_diagnostik` int NOT NULL,
  `answer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alasanAnswer` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_student` (`id_student`),
  KEY `id_question_diagnostik` (`id_question_diagnostik`),
  CONSTRAINT `Diagnostik_answers_ibfk_3` FOREIGN KEY (`id_student`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Diagnostik_answers_ibfk_4` FOREIGN KEY (`id_question_diagnostik`) REFERENCES `Diagnostik_question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=554 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Diagnostik_answers`
--

LOCK TABLES `Diagnostik_answers` WRITE;
/*!40000 ALTER TABLE `Diagnostik_answers` DISABLE KEYS */;
INSERT INTO `Diagnostik_answers` VALUES (524,15,0,'2022-01-13 12:54:35.358',20,'akucing',1),(525,15,0,'2022-01-13 12:54:35.366',19,'kucing',2),(526,16,0,'2022-01-13 13:02:42.555',20,'kucing',2),(527,16,0,'2022-01-13 13:02:42.553',19,'kucing',4),(528,17,0,'2022-01-14 19:55:50.192',20,'kucing',4),(529,17,0,'2022-01-14 19:55:50.184',19,'kucing',3),(530,18,0,'2022-01-16 09:33:59.307',19,'kucing',1),(531,18,0,'2022-01-16 09:33:59.320',20,'kucing',1),(532,19,0,'2022-01-16 15:08:14.595',19,'kucing',4),(533,19,0,'2022-01-16 15:08:14.599',20,'kucing',3),(534,20,0,'2022-01-16 15:16:20.428',19,'kucing',5),(535,20,0,'2022-01-16 15:16:20.430',20,'kucing',4),(538,17,0,'2022-01-16 21:09:11.164',19,'kucing',3),(539,17,0,'2022-01-16 21:09:11.165',20,'kucing',4),(544,21,0,'2022-01-16 21:14:34.387',20,'akucing',5),(545,21,0,'2022-01-16 21:14:34.388',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216',5),(546,21,0,'2022-01-16 21:14:36.298',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216',5),(547,21,0,'2022-01-16 21:14:36.347',20,'akucing',5),(548,21,0,'2022-01-16 21:14:37.026',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216',5),(549,21,0,'2022-01-16 21:14:37.027',20,'akucing',5),(550,21,0,'2022-01-16 21:14:41.297',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216',5),(551,21,0,'2022-01-16 21:14:41.299',20,'akucing',5),(552,22,0,'2022-01-16 21:37:52.064',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216',5),(553,22,0,'2022-01-16 21:37:52.066',20,'bkucing',5);
/*!40000 ALTER TABLE `Diagnostik_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Diagnostik_question`
--

DROP TABLE IF EXISTS `Diagnostik_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Diagnostik_question` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option1` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option2` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option3` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option4` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option5` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `created_At` datetime(3) NOT NULL,
  `trueAnswer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `media` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idIndicator` int NOT NULL,
  `idSubject` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idSubject` (`idSubject`),
  KEY `idIndicator` (`idIndicator`),
  CONSTRAINT `Diagnostik_question_ibfk_1` FOREIGN KEY (`idSubject`) REFERENCES `Subject_matterials` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Diagnostik_question_ibfk_2` FOREIGN KEY (`idIndicator`) REFERENCES `Indicators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Diagnostik_question`
--

LOCK TABLES `Diagnostik_question` WRITE;
/*!40000 ALTER TABLE `Diagnostik_question` DISABLE KEYS */;
INSERT INTO `Diagnostik_question` VALUES (13,'no 1 adalah','ini jawaban','ini salah1','ini salah2','ini salah3','ini salah4',0,'2022-01-06 09:09:53.574','ini jawaban',NULL,1,1),(14,'no 1 adalah','ini jawaban','ini salah1','ini salah2','ini salah3','ini salah4',0,'2022-01-06 09:10:53.678','ini jawaban','ini jawaban',1,1),(15,'Carilah gambar berikut','badak','harimau','singa','kucing','anjing',0,'2022-01-06 09:11:40.996','kucing','https://image.shutterstock.com/image-vector/pixel-noise-tv-vector-vhs-260nw-690904402.jpg',1,1),(16,'apakah kamu anjing','badak','harimau','singa','kucing','anjing',0,'2022-01-06 09:12:57.232','kucing','https://image.shutterstock.com/image-vector/pixel-noise-tv-vector-vhs-260nw-690904402.jpg',1,1),(17,'Carilah gambar berikut','badakkk','harimau','singa','kucing','anjing',0,'2022-01-06 09:13:32.010','anjing','https://image.shutterstock.com/image-vector/pixel-noise-tv-vector-vhs-260nw-690904402.jpg',7,2),(18,'kucing','kucing','akucing','bkucing','ckucing','dkucing',0,'2022-01-10 13:20:59.413','kucing','masabodo',9,1),(19,'kucing2','kucing','https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216','bkucing','ckucing','dkucing',1,'2022-01-10 13:21:23.322','dkucing','https://www.w3schools.com/w3css/img_lights.jpg',9,1),(20,'kucing3','kucing','akucing','bkucing','ckucing','dkucing',1,'2022-01-10 13:21:35.356','ckucing','https://www.w3schools.com/w3css/img_lights.jpg',10,2),(21,'apakah ini benars','kucings','akucings','bkucings','ckucings','dkucings',0,'2022-01-16 20:21:24.199','akucings','asdxx',9,1);
/*!40000 ALTER TABLE `Diagnostik_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Exam_Question`
--

DROP TABLE IF EXISTS `Exam_Question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Exam_Question` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option1` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option2` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option3` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option4` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option5` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `created_At` datetime(3) NOT NULL,
  `trueAnswer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `media` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_Indicator` int NOT NULL,
  `idSubject` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idSubject` (`idSubject`),
  KEY `id_Indicator` (`id_Indicator`),
  CONSTRAINT `Exam_Question_ibfk_1` FOREIGN KEY (`idSubject`) REFERENCES `Subject_matterials` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Exam_Question_ibfk_2` FOREIGN KEY (`id_Indicator`) REFERENCES `Indicators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Exam_Question`
--

LOCK TABLES `Exam_Question` WRITE;
/*!40000 ALTER TABLE `Exam_Question` DISABLE KEYS */;
INSERT INTO `Exam_Question` VALUES (1,'apakah ini benar','kucing','akucing','bkucing','ckucing','dkucing',1,'2022-01-16 11:34:08.218','dkucing','www..facebook.com',9,1),(2,'apakah ini benar','kucing','https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216','bkucing','ckucing','dkucing',1,'2022-01-16 11:35:43.802','dkucing','www.google.com',9,1),(3,'apakah ini benar','kucing','akucing','bkucing','ckucing','dkucing',1,'2022-01-16 11:37:38.790','dkucing','www.google.com',9,1),(4,'apakah ini benar','kucing','akucing','bkucing','ckucing','dkucing',1,'2022-01-16 11:37:41.236','dkucing','www.google.com',9,1),(5,'apakah ini benar','kucing','akucing','bkucing','ckucing','dkucing',1,'2022-01-16 11:37:43.051','dkucing','www.google.com',9,1),(6,'apakah ini benar','kucing','akucing','bkucing','ckucing','dkucing',1,'2022-01-16 11:37:47.422','dkucing','www.google.com',10,2),(7,'apakah ini benar','kucing','akucing','bkucing','ckucing','dkucing',1,'2022-01-16 11:37:48.791','dkucing','www.google.com',10,2),(8,'apakah ini benar','kucing','akucing','bkucing','ckucing','dkucing',1,'2022-01-16 11:37:50.345','dkucing','www.google.com',10,2),(9,'apakah ini benar','kucing','akucing','bkucing','ckucing','dkucing',1,'2022-01-16 11:37:52.176','dkucing','www.google.com',10,2),(10,'apakah ini benar','kucing','akucing','bkucing','ckucingc','dkucing',1,'2022-01-16 11:37:53.765','dkucing','www.google.com',10,2),(11,'apakah ini benar','kucings','akucings','bkucingss','ckucings','dkucings',0,'2022-01-16 20:46:47.829','dkucings','www..facebook.coms',9,2);
/*!40000 ALTER TABLE `Exam_Question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Exam_answers`
--

DROP TABLE IF EXISTS `Exam_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Exam_answers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `studentId` int NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_At` datetime(3) NOT NULL,
  `id_Exam_Question` int NOT NULL,
  `answer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Exam_Question` (`id_Exam_Question`),
  KEY `studentId` (`studentId`),
  CONSTRAINT `Exam_answers_ibfk_1` FOREIGN KEY (`id_Exam_Question`) REFERENCES `Exam_Question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Exam_answers_ibfk_2` FOREIGN KEY (`studentId`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=504 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Exam_answers`
--

LOCK TABLES `Exam_answers` WRITE;
/*!40000 ALTER TABLE `Exam_answers` DISABLE KEYS */;
INSERT INTO `Exam_answers` VALUES (1,17,0,'2022-01-16 13:48:00.511',6,'ini jawaban'),(2,17,0,'2022-01-16 13:48:00.498',2,'ini jawaban'),(3,17,0,'2022-01-16 13:48:00.497',3,'ini jawaban'),(4,17,0,'2022-01-16 13:48:00.513',4,'ini jawaban'),(5,17,0,'2022-01-16 13:48:00.491',5,'ini jawaban'),(6,17,0,'2022-01-16 13:48:00.512',2,'ini jawaban'),(7,17,0,'2022-01-16 13:48:00.500',7,'ini jawaban'),(8,17,0,'2022-01-16 13:48:00.514',1,'ini jawaban'),(9,17,0,'2022-01-16 13:48:00.519',9,'ini jawaban'),(10,17,0,'2022-01-16 13:48:00.518',10,'ini jawaban'),(11,17,0,'2022-01-16 13:48:00.516',8,'ini jawaban'),(12,17,0,'2022-01-16 13:48:34.303',1,'ini jawaban'),(13,17,0,'2022-01-16 13:48:34.310',3,'ini jawaban'),(14,17,0,'2022-01-16 13:48:34.326',2,'ini jawaban'),(15,17,0,'2022-01-16 13:48:34.309',2,'ini jawaban'),(16,17,0,'2022-01-16 13:48:34.328',5,'ini jawaban'),(17,17,0,'2022-01-16 13:48:34.327',6,'ini jawaban'),(18,17,0,'2022-01-16 13:48:34.330',10,'ini jawaban'),(19,17,0,'2022-01-16 13:48:34.330',8,'ini jawaban'),(20,17,0,'2022-01-16 13:48:34.329',4,'ini jawaban'),(21,17,0,'2022-01-16 13:48:34.332',7,'ini jawaban'),(22,17,0,'2022-01-16 13:48:34.332',9,'ini jawaban'),(23,17,0,'2022-01-16 13:49:20.952',3,'ini jawaban'),(24,17,0,'2022-01-16 13:49:20.951',2,'ini jawaban'),(25,17,0,'2022-01-16 13:49:20.944',1,'ini jawaban'),(26,17,0,'2022-01-16 13:49:20.965',6,'ini jawaban'),(27,17,0,'2022-01-16 13:49:20.953',2,'ini jawaban'),(28,17,0,'2022-01-16 13:49:20.968',8,'ini jawaban'),(29,17,0,'2022-01-16 13:49:20.967',4,'ini jawaban'),(30,17,0,'2022-01-16 13:49:20.966',5,'ini jawaban'),(31,17,0,'2022-01-16 13:49:20.970',10,'ini jawaban'),(32,17,0,'2022-01-16 13:49:20.971',7,'ini jawaban'),(33,17,0,'2022-01-16 13:49:20.969',9,'ini jawaban'),(34,17,0,'2022-01-16 13:50:14.282',9,'ini jawaban'),(35,17,0,'2022-01-16 13:50:14.277',1,'ini jawaban'),(36,17,0,'2022-01-16 13:50:14.282',10,'ini jawaban'),(37,17,0,'2022-01-16 13:50:14.284',2,'ini jawaban'),(38,17,0,'2022-01-16 13:50:14.285',5,'ini jawaban'),(39,17,0,'2022-01-16 13:50:14.286',3,'ini jawaban'),(40,17,0,'2022-01-16 13:50:14.281',7,'ini jawaban'),(41,17,0,'2022-01-16 13:50:14.278',4,'ini jawaban'),(42,17,0,'2022-01-16 13:50:14.280',6,'ini jawaban'),(43,17,0,'2022-01-16 13:50:14.287',8,'ini jawaban'),(44,17,0,'2022-01-16 13:53:08.771',2,'ini jawaban'),(45,17,0,'2022-01-16 13:53:08.763',1,'dkucing'),(46,17,0,'2022-01-16 13:53:08.772',4,'ini jawaban'),(47,17,0,'2022-01-16 13:53:08.787',6,'ini jawaban'),(48,17,0,'2022-01-16 13:53:08.774',3,'ini jawaban'),(49,17,0,'2022-01-16 13:53:08.790',10,'ini jawaban'),(50,17,0,'2022-01-16 13:53:08.789',5,'ini jawaban'),(51,17,0,'2022-01-16 13:53:08.788',7,'ini jawaban'),(52,17,0,'2022-01-16 13:53:08.790',9,'ini jawaban'),(53,17,0,'2022-01-16 13:53:08.792',8,'ini jawaban'),(54,17,0,'2022-01-16 13:53:47.519',7,'ini jawaban'),(55,17,0,'2022-01-16 13:53:47.524',8,'ini jawaban'),(56,17,0,'2022-01-16 13:53:47.525',6,'ini jawaban'),(57,17,0,'2022-01-16 13:53:47.528',3,'ini jawaban'),(58,17,0,'2022-01-16 13:53:47.526',2,'ini jawaban'),(59,17,0,'2022-01-16 13:53:47.529',4,'ini jawaban'),(60,17,0,'2022-01-16 13:53:47.524',5,'ini jawaban'),(61,17,0,'2022-01-16 13:53:47.523',10,'ini jawaban'),(62,17,0,'2022-01-16 13:53:47.520',1,'dkucing'),(63,17,0,'2022-01-16 13:53:47.522',9,'ini jawaban'),(64,17,0,'2022-01-16 13:54:02.166',2,'ini jawaban'),(65,17,0,'2022-01-16 13:54:02.167',4,'ini jawaban'),(66,17,0,'2022-01-16 13:54:02.179',6,'ini jawaban'),(67,17,0,'2022-01-16 13:54:02.160',1,'dkucing'),(68,17,0,'2022-01-16 13:54:02.181',5,'ini jawaban'),(69,17,0,'2022-01-16 13:54:02.180',7,'ini jawaban'),(70,17,0,'2022-01-16 13:54:02.168',3,'ini jawaban'),(71,17,0,'2022-01-16 13:54:02.183',10,'ini jawaban'),(72,17,0,'2022-01-16 13:54:02.182',9,'ini jawaban'),(73,17,0,'2022-01-16 13:54:02.184',8,'ini jawaban'),(74,17,1,'2022-01-16 13:57:01.041',1,'dkucing'),(75,17,0,'2022-01-16 13:57:01.051',4,'ini jawaban'),(76,17,0,'2022-01-16 13:57:01.048',2,'ini jawaban'),(77,17,0,'2022-01-16 13:57:01.053',3,'ini jawaban'),(78,17,0,'2022-01-16 13:57:01.057',7,'ini jawaban'),(79,17,0,'2022-01-16 13:57:01.054',6,'ini jawaban'),(80,17,0,'2022-01-16 13:57:01.071',10,'ini jawaban'),(81,17,0,'2022-01-16 13:57:01.075',8,'ini jawaban'),(82,17,0,'2022-01-16 13:57:01.058',5,'ini jawaban'),(83,17,0,'2022-01-16 13:57:01.072',9,'ini jawaban'),(84,17,0,'2022-01-16 13:57:30.834',2,'ini jawaban'),(85,17,0,'2022-01-16 13:57:30.836',3,'ini jawaban'),(86,17,0,'2022-01-16 13:57:30.835',4,'ini jawaban'),(87,17,0,'2022-01-16 13:57:30.848',6,'ini jawaban'),(88,17,1,'2022-01-16 13:57:30.827',1,'dkucing'),(89,17,0,'2022-01-16 13:57:30.849',7,'ini jawaban'),(90,17,0,'2022-01-16 13:57:30.851',9,'ini jawaban'),(91,17,0,'2022-01-16 13:57:30.850',5,'ini jawaban'),(92,17,0,'2022-01-16 13:57:30.854',8,'ini jawaban'),(93,17,0,'2022-01-16 13:57:30.852',10,'ini jawaban'),(94,17,1,'2022-01-16 14:00:28.668',1,'dkucing'),(95,17,0,'2022-01-16 14:00:28.675',2,'ini jawaban'),(96,17,0,'2022-01-16 14:00:28.677',3,'ini jawaban'),(97,17,0,'2022-01-16 14:00:28.677',4,'ini jawaban'),(98,17,0,'2022-01-16 14:00:28.690',7,'ini jawaban'),(99,17,0,'2022-01-16 14:00:28.689',6,'ini jawaban'),(100,17,0,'2022-01-16 14:00:28.692',9,'ini jawaban'),(101,17,0,'2022-01-16 14:00:28.691',5,'ini jawaban'),(102,17,0,'2022-01-16 14:00:28.695',8,'ini jawaban'),(103,17,0,'2022-01-16 14:00:28.693',10,'ini jawaban'),(104,17,1,'2022-01-16 14:02:23.004',1,'dkucing'),(105,17,0,'2022-01-16 14:02:23.010',2,'ini jawaban'),(106,17,0,'2022-01-16 14:02:23.011',4,'ini jawaban'),(107,17,0,'2022-01-16 14:02:23.022',6,'ini jawaban'),(108,17,0,'2022-01-16 14:02:23.011',3,'ini jawaban'),(109,17,0,'2022-01-16 14:02:23.024',8,'ini jawaban'),(110,17,0,'2022-01-16 14:02:23.023',7,'ini jawaban'),(111,17,0,'2022-01-16 14:02:23.025',10,'ini jawaban'),(112,17,0,'2022-01-16 14:02:23.025',5,'ini jawaban'),(113,17,0,'2022-01-16 14:02:23.027',9,'ini jawaban'),(114,17,0,'2022-01-16 14:02:49.951',2,'ini jawaban'),(115,17,1,'2022-01-16 14:02:49.944',1,'dkucing'),(116,17,0,'2022-01-16 14:02:49.953',3,'ini jawaban'),(117,17,0,'2022-01-16 14:02:49.953',6,'ini jawaban'),(118,17,0,'2022-01-16 14:02:49.952',4,'ini jawaban'),(119,17,0,'2022-01-16 14:02:49.955',8,'ini jawaban'),(120,17,0,'2022-01-16 14:02:49.954',5,'ini jawaban'),(121,17,0,'2022-01-16 14:02:49.968',10,'ini jawaban'),(122,17,0,'2022-01-16 14:02:49.956',7,'ini jawaban'),(123,17,0,'2022-01-16 14:02:49.969',9,'ini jawaban'),(124,17,0,'2022-01-16 14:02:51.388',3,'ini jawaban'),(125,17,0,'2022-01-16 14:02:51.391',5,'ini jawaban'),(126,17,0,'2022-01-16 14:02:51.392',7,'ini jawaban'),(127,17,0,'2022-01-16 14:02:51.394',2,'ini jawaban'),(128,17,0,'2022-01-16 14:02:51.396',10,'ini jawaban'),(129,17,1,'2022-01-16 14:02:51.390',1,'dkucing'),(130,17,0,'2022-01-16 14:02:51.392',9,'ini jawaban'),(131,17,0,'2022-01-16 14:02:51.393',4,'ini jawaban'),(132,17,0,'2022-01-16 14:02:51.395',6,'ini jawaban'),(133,17,0,'2022-01-16 14:02:51.397',8,'ini jawaban'),(134,17,0,'2022-01-16 14:03:29.256',3,'ini jawaban'),(135,17,0,'2022-01-16 14:03:29.254',2,'ini jawaban'),(136,17,1,'2022-01-16 14:03:29.248',1,'dkucing'),(137,17,0,'2022-01-16 14:03:29.258',4,'ini jawaban'),(138,17,0,'2022-01-16 14:03:29.259',8,'ini jawaban'),(139,17,0,'2022-01-16 14:03:29.257',5,'ini jawaban'),(140,17,0,'2022-01-16 14:03:29.261',6,'ini jawaban'),(141,17,0,'2022-01-16 14:03:29.260',7,'ini jawaban'),(142,17,0,'2022-01-16 14:03:29.273',10,'ini jawaban'),(143,17,0,'2022-01-16 14:03:29.261',9,'ini jawaban'),(144,17,1,'2022-01-16 14:04:11.501',1,'dkucing'),(145,17,0,'2022-01-16 14:04:11.507',2,'ini jawaban'),(146,17,0,'2022-01-16 14:04:11.508',4,'ini jawaban'),(147,17,0,'2022-01-16 14:04:11.510',6,'ini jawaban'),(148,17,0,'2022-01-16 14:04:11.509',3,'ini jawaban'),(149,17,0,'2022-01-16 14:04:11.512',5,'ini jawaban'),(150,17,0,'2022-01-16 14:04:11.511',7,'ini jawaban'),(151,17,0,'2022-01-16 14:04:11.524',10,'ini jawaban'),(152,17,0,'2022-01-16 14:04:11.513',9,'ini jawaban'),(153,17,0,'2022-01-16 14:04:11.526',8,'ini jawaban'),(154,17,1,'2022-01-16 14:04:52.681',1,'dkucing'),(155,17,0,'2022-01-16 14:04:52.688',2,'ini jawaban'),(156,17,0,'2022-01-16 14:04:52.689',4,'ini jawaban'),(157,17,0,'2022-01-16 14:04:52.690',3,'ini jawaban'),(158,17,0,'2022-01-16 14:04:52.692',6,'ini jawaban'),(159,17,0,'2022-01-16 14:04:52.691',7,'ini jawaban'),(160,17,0,'2022-01-16 14:04:52.693',5,'ini jawaban'),(161,17,0,'2022-01-16 14:04:52.706',10,'ini jawaban'),(162,17,0,'2022-01-16 14:04:52.705',9,'ini jawaban'),(163,17,0,'2022-01-16 14:04:52.708',8,'ini jawaban'),(164,17,1,'2022-01-16 14:05:10.179',1,'dkucing'),(165,17,0,'2022-01-16 14:05:10.186',5,'ini jawaban'),(166,17,0,'2022-01-16 14:05:10.185',2,'ini jawaban'),(167,17,0,'2022-01-16 14:05:10.187',3,'ini jawaban'),(168,17,0,'2022-01-16 14:05:10.186',4,'ini jawaban'),(169,17,0,'2022-01-16 14:05:10.197',9,'ini jawaban'),(170,17,0,'2022-01-16 14:05:10.199',8,'ini jawaban'),(171,17,0,'2022-01-16 14:05:10.201',6,'ini jawaban'),(172,17,0,'2022-01-16 14:05:10.200',7,'ini jawaban'),(173,17,0,'2022-01-16 14:05:10.202',10,'ini jawaban'),(174,17,1,'2022-01-16 14:11:51.115',1,'dkucing'),(175,17,0,'2022-01-16 14:11:51.122',2,'ini jawaban'),(176,17,0,'2022-01-16 14:11:51.124',3,'ini jawaban'),(177,17,0,'2022-01-16 14:11:51.125',7,'ini jawaban'),(178,17,0,'2022-01-16 14:11:51.123',4,'ini jawaban'),(179,17,0,'2022-01-16 14:11:51.127',5,'ini jawaban'),(180,17,0,'2022-01-16 14:11:51.136',9,'ini jawaban'),(181,17,0,'2022-01-16 14:11:51.125',6,'ini jawaban'),(182,17,0,'2022-01-16 14:11:51.137',8,'ini jawaban'),(183,17,0,'2022-01-16 14:11:51.139',10,'ini jawaban'),(184,17,1,'2022-01-16 14:13:35.444',1,'dkucing'),(185,17,0,'2022-01-16 14:13:35.452',4,'ini jawaban'),(186,17,0,'2022-01-16 14:13:35.451',2,'ini jawaban'),(187,17,0,'2022-01-16 14:13:35.453',6,'ini jawaban'),(188,17,0,'2022-01-16 14:13:35.454',7,'ini jawaban'),(189,17,0,'2022-01-16 14:13:35.452',3,'ini jawaban'),(190,17,0,'2022-01-16 14:13:35.455',8,'ini jawaban'),(191,17,0,'2022-01-16 14:13:35.456',5,'ini jawaban'),(192,17,0,'2022-01-16 14:13:35.467',9,'ini jawaban'),(193,17,0,'2022-01-16 14:13:35.465',10,'ini jawaban'),(194,17,0,'2022-01-16 14:15:24.443',2,'ini jawaban'),(195,17,0,'2022-01-16 14:15:24.444',4,'ini jawaban'),(196,17,1,'2022-01-16 14:15:24.436',1,'dkucing'),(197,17,0,'2022-01-16 14:15:24.446',8,'ini jawaban'),(198,17,0,'2022-01-16 14:15:24.445',3,'ini jawaban'),(199,17,0,'2022-01-16 14:15:24.448',10,'ini jawaban'),(200,17,0,'2022-01-16 14:15:24.447',6,'ini jawaban'),(201,17,0,'2022-01-16 14:15:24.459',9,'ini jawaban'),(202,17,0,'2022-01-16 14:15:24.448',5,'ini jawaban'),(203,17,0,'2022-01-16 14:15:24.460',7,'ini jawaban'),(204,17,1,'2022-01-16 14:16:04.225',1,'dkucing'),(205,17,0,'2022-01-16 14:16:04.232',2,'ini jawaban'),(206,17,0,'2022-01-16 14:16:04.233',4,'ini jawaban'),(207,17,0,'2022-01-16 14:16:04.234',6,'ini jawaban'),(208,17,0,'2022-01-16 14:16:04.234',3,'ini jawaban'),(209,17,0,'2022-01-16 14:16:04.236',5,'ini jawaban'),(210,17,0,'2022-01-16 14:16:04.235',7,'ini jawaban'),(211,17,0,'2022-01-16 14:16:04.248',9,'ini jawaban'),(212,17,0,'2022-01-16 14:16:04.247',10,'ini jawaban'),(213,17,0,'2022-01-16 14:16:04.249',8,'ini jawaban'),(214,17,0,'2022-01-16 14:19:06.100',2,'ini jawaban'),(215,17,1,'2022-01-16 14:19:06.094',1,'dkucing'),(216,17,0,'2022-01-16 14:19:06.102',3,'ini jawaban'),(217,17,0,'2022-01-16 14:19:06.101',4,'ini jawaban'),(218,17,0,'2022-01-16 14:19:06.104',5,'ini jawaban'),(219,17,0,'2022-01-16 14:19:06.105',6,'ini jawaban'),(220,17,0,'2022-01-16 14:19:06.103',8,'ini jawaban'),(221,17,0,'2022-01-16 14:19:06.114',10,'ini jawaban'),(222,17,0,'2022-01-16 14:19:06.115',9,'ini jawaban'),(223,17,0,'2022-01-16 14:19:06.116',7,'ini jawaban'),(224,17,1,'2022-01-16 14:20:55.195',1,'dkucing'),(225,17,0,'2022-01-16 14:20:55.203',4,'ini jawaban'),(226,17,0,'2022-01-16 14:20:55.204',3,'ini jawaban'),(227,17,0,'2022-01-16 14:20:55.204',8,'ini jawaban'),(228,17,0,'2022-01-16 14:20:55.202',2,'ini jawaban'),(229,17,0,'2022-01-16 14:20:55.206',5,'ini jawaban'),(230,17,0,'2022-01-16 14:20:55.205',6,'ini jawaban'),(231,17,0,'2022-01-16 14:20:55.222',10,'ini jawaban'),(232,17,0,'2022-01-16 14:20:55.207',7,'ini jawaban'),(233,17,0,'2022-01-16 14:20:55.224',9,'ini jawaban'),(234,17,0,'2022-01-16 14:23:09.602',3,'ini jawaban'),(235,17,1,'2022-01-16 14:23:09.594',1,'dkucing'),(236,17,0,'2022-01-16 14:23:09.601',2,'ini jawaban'),(237,17,0,'2022-01-16 14:23:09.604',7,'ini jawaban'),(238,17,0,'2022-01-16 14:23:09.603',4,'ini jawaban'),(239,17,0,'2022-01-16 14:23:09.606',9,'ini jawaban'),(240,17,0,'2022-01-16 14:23:09.605',6,'ini jawaban'),(241,17,0,'2022-01-16 14:23:09.606',5,'ini jawaban'),(242,17,0,'2022-01-16 14:23:09.617',10,'ini jawaban'),(243,17,0,'2022-01-16 14:23:09.618',8,'ini jawaban'),(244,17,0,'2022-01-16 14:23:31.033',3,'ini jawaban'),(245,17,1,'2022-01-16 14:23:31.025',1,'dkucing'),(246,17,0,'2022-01-16 14:23:31.035',2,'ini jawaban'),(247,17,0,'2022-01-16 14:23:31.036',7,'ini jawaban'),(248,17,0,'2022-01-16 14:23:31.034',4,'ini jawaban'),(249,17,0,'2022-01-16 14:23:31.038',5,'ini jawaban'),(250,17,0,'2022-01-16 14:23:31.037',6,'ini jawaban'),(251,17,0,'2022-01-16 14:23:31.054',9,'ini jawaban'),(252,17,0,'2022-01-16 14:23:31.053',10,'ini jawaban'),(253,17,0,'2022-01-16 14:23:31.056',8,'ini jawaban'),(254,17,1,'2022-01-16 14:23:41.270',1,'dkucing'),(255,17,0,'2022-01-16 14:23:41.278',3,'ini jawaban'),(256,17,0,'2022-01-16 14:23:41.277',2,'ini jawaban'),(257,17,0,'2022-01-16 14:23:41.279',7,'ini jawaban'),(258,17,0,'2022-01-16 14:23:41.279',4,'ini jawaban'),(259,17,0,'2022-01-16 14:23:41.281',6,'ini jawaban'),(260,17,0,'2022-01-16 14:23:41.280',5,'ini jawaban'),(261,17,0,'2022-01-16 14:23:41.283',8,'ini jawaban'),(262,17,0,'2022-01-16 14:23:41.282',9,'ini jawaban'),(263,17,0,'2022-01-16 14:23:41.284',10,'ini jawaban'),(264,17,1,'2022-01-16 14:24:03.264',1,'dkucing'),(265,17,0,'2022-01-16 14:24:03.272',2,'ini jawaban'),(266,17,0,'2022-01-16 14:24:03.274',4,'ini jawaban'),(267,17,0,'2022-01-16 14:24:03.276',6,'ini jawaban'),(268,17,0,'2022-01-16 14:24:03.273',3,'ini jawaban'),(269,17,0,'2022-01-16 14:24:03.277',5,'ini jawaban'),(270,17,0,'2022-01-16 14:24:03.275',7,'ini jawaban'),(271,17,0,'2022-01-16 14:24:03.278',10,'ini jawaban'),(272,17,0,'2022-01-16 14:24:03.278',9,'ini jawaban'),(273,17,0,'2022-01-16 14:24:03.280',8,'ini jawaban'),(274,17,1,'2022-01-16 14:24:45.694',1,'dkucing'),(275,17,0,'2022-01-16 14:24:45.702',4,'ini jawaban'),(276,17,0,'2022-01-16 14:24:45.701',3,'ini jawaban'),(277,17,0,'2022-01-16 14:24:45.703',2,'ini jawaban'),(278,17,0,'2022-01-16 14:24:45.704',7,'ini jawaban'),(279,17,0,'2022-01-16 14:24:45.704',6,'ini jawaban'),(280,17,0,'2022-01-16 14:24:45.716',9,'ini jawaban'),(281,17,0,'2022-01-16 14:24:45.705',5,'ini jawaban'),(282,17,0,'2022-01-16 14:24:45.719',8,'ini jawaban'),(283,17,0,'2022-01-16 14:24:45.717',10,'ini jawaban'),(284,17,1,'2022-01-16 14:25:12.425',1,'dkucing'),(285,17,0,'2022-01-16 14:25:12.434',4,'ini jawaban'),(286,17,0,'2022-01-16 14:25:12.433',2,'ini jawaban'),(287,17,0,'2022-01-16 14:25:12.435',3,'ini jawaban'),(288,17,0,'2022-01-16 14:25:12.436',7,'ini jawaban'),(289,17,0,'2022-01-16 14:25:12.438',5,'ini jawaban'),(290,17,0,'2022-01-16 14:25:12.437',6,'ini jawaban'),(291,17,0,'2022-01-16 14:25:12.440',10,'ini jawaban'),(292,17,0,'2022-01-16 14:25:12.441',8,'ini jawaban'),(293,17,0,'2022-01-16 14:25:12.439',9,'ini jawaban'),(294,17,0,'2022-01-16 14:26:03.803',2,'ini jawaban'),(295,17,1,'2022-01-16 14:26:03.797',1,'dkucing'),(296,17,0,'2022-01-16 14:26:03.804',4,'ini jawaban'),(297,17,0,'2022-01-16 14:26:03.806',6,'ini jawaban'),(298,17,0,'2022-01-16 14:26:03.805',3,'ini jawaban'),(299,17,0,'2022-01-16 14:26:03.807',5,'ini jawaban'),(300,17,0,'2022-01-16 14:26:03.809',9,'ini jawaban'),(301,17,0,'2022-01-16 14:26:03.808',7,'ini jawaban'),(302,17,0,'2022-01-16 14:26:03.821',8,'ini jawaban'),(303,17,0,'2022-01-16 14:26:03.809',10,'ini jawaban'),(304,17,0,'2022-01-16 14:34:03.729',2,'ini jawaban'),(305,17,1,'2022-01-16 14:34:03.721',1,'dkucing'),(306,17,0,'2022-01-16 14:34:03.730',4,'ini jawaban'),(307,17,0,'2022-01-16 14:34:03.731',3,'ini jawaban'),(308,17,0,'2022-01-16 14:34:03.732',6,'ini jawaban'),(309,17,0,'2022-01-16 14:34:03.734',5,'ini jawaban'),(310,17,0,'2022-01-16 14:34:03.736',9,'ini jawaban'),(311,17,0,'2022-01-16 14:34:03.735',10,'ini jawaban'),(312,17,0,'2022-01-16 14:34:03.733',7,'ini jawaban'),(313,17,0,'2022-01-16 14:34:03.737',8,'ini jawaban'),(314,17,0,'2022-01-16 14:34:11.970',4,'ini jawaban'),(315,17,0,'2022-01-16 14:34:11.972',5,'ini jawaban'),(316,17,1,'2022-01-16 14:34:11.971',1,'dkucing'),(317,17,0,'2022-01-16 14:34:11.974',2,'ini jawaban'),(318,17,0,'2022-01-16 14:34:11.976',9,'ini jawaban'),(319,17,0,'2022-01-16 14:34:11.973',3,'ini jawaban'),(320,17,0,'2022-01-16 14:34:11.977',10,'ini jawaban'),(321,17,0,'2022-01-16 14:34:11.978',7,'ini jawaban'),(322,17,0,'2022-01-16 14:34:11.979',8,'ini jawaban'),(323,17,0,'2022-01-16 14:34:11.979',6,'ini jawaban'),(324,17,0,'2022-01-16 14:35:29.347',2,'ini jawaban'),(325,17,1,'2022-01-16 14:35:29.340',1,'dkucing'),(326,17,0,'2022-01-16 14:35:29.348',4,'ini jawaban'),(327,17,0,'2022-01-16 14:35:29.350',6,'ini jawaban'),(328,17,0,'2022-01-16 14:35:29.349',3,'ini jawaban'),(329,17,0,'2022-01-16 14:35:29.351',5,'ini jawaban'),(330,17,0,'2022-01-16 14:35:29.350',7,'ini jawaban'),(331,17,0,'2022-01-16 14:35:29.361',10,'ini jawaban'),(332,17,0,'2022-01-16 14:35:29.352',8,'ini jawaban'),(333,17,0,'2022-01-16 14:35:29.363',9,'ini jawaban'),(334,17,0,'2022-01-16 14:35:31.192',5,'ini jawaban'),(335,17,0,'2022-01-16 14:35:31.194',3,'ini jawaban'),(336,17,0,'2022-01-16 14:35:31.196',7,'ini jawaban'),(337,17,0,'2022-01-16 14:35:31.197',4,'ini jawaban'),(338,17,0,'2022-01-16 14:35:31.199',8,'ini jawaban'),(339,17,0,'2022-01-16 14:35:31.193',6,'ini jawaban'),(340,17,1,'2022-01-16 14:35:31.195',1,'dkucing'),(341,17,0,'2022-01-16 14:35:31.196',9,'ini jawaban'),(342,17,0,'2022-01-16 14:35:31.198',2,'ini jawaban'),(343,17,0,'2022-01-16 14:35:31.199',10,'ini jawaban'),(344,17,1,'2022-01-16 14:35:56.847',1,'dkucing'),(345,17,0,'2022-01-16 14:35:56.855',2,'ini jawaban'),(346,17,0,'2022-01-16 14:35:56.856',4,'ini jawaban'),(347,17,0,'2022-01-16 14:35:56.857',6,'ini jawaban'),(348,17,0,'2022-01-16 14:35:56.857',3,'ini jawaban'),(349,17,0,'2022-01-16 14:35:56.860',9,'ini jawaban'),(350,17,0,'2022-01-16 14:35:56.858',7,'ini jawaban'),(351,17,0,'2022-01-16 14:35:56.861',10,'ini jawaban'),(352,17,0,'2022-01-16 14:35:56.859',5,'ini jawaban'),(353,17,0,'2022-01-16 14:35:56.862',8,'ini jawaban'),(354,17,1,'2022-01-16 14:36:13.867',1,'dkucing'),(355,17,0,'2022-01-16 14:36:13.873',2,'ini jawaban'),(356,17,0,'2022-01-16 14:36:13.874',4,'ini jawaban'),(357,17,0,'2022-01-16 14:36:13.875',7,'ini jawaban'),(358,17,0,'2022-01-16 14:36:13.875',3,'ini jawaban'),(359,17,0,'2022-01-16 14:36:13.877',5,'ini jawaban'),(360,17,0,'2022-01-16 14:36:13.876',6,'ini jawaban'),(361,17,0,'2022-01-16 14:36:13.893',9,'ini jawaban'),(362,17,0,'2022-01-16 14:36:13.892',10,'ini jawaban'),(363,17,0,'2022-01-16 14:36:13.896',8,'ini jawaban'),(364,17,1,'2022-01-16 14:36:19.563',1,'dkucing'),(365,17,0,'2022-01-16 14:36:19.564',3,'ini jawaban'),(366,17,0,'2022-01-16 14:36:19.565',4,'ini jawaban'),(367,17,0,'2022-01-16 14:36:19.561',2,'ini jawaban'),(368,17,0,'2022-01-16 14:36:19.565',5,'ini jawaban'),(369,17,0,'2022-01-16 14:36:19.567',6,'ini jawaban'),(370,17,0,'2022-01-16 14:36:19.568',8,'ini jawaban'),(371,17,0,'2022-01-16 14:36:19.570',9,'ini jawaban'),(372,17,0,'2022-01-16 14:36:19.571',7,'ini jawaban'),(373,17,0,'2022-01-16 14:36:19.571',10,'ini jawaban'),(374,17,1,'2022-01-16 14:41:58.435',1,'dkucing'),(375,17,1,'2022-01-16 14:41:58.445',4,'dkucing'),(376,17,1,'2022-01-16 14:41:58.444',3,'dkucing'),(377,17,0,'2022-01-16 14:41:58.449',6,'ini jawaban'),(378,17,1,'2022-01-16 14:41:58.446',2,'dkucing'),(379,17,0,'2022-01-16 14:41:58.450',7,'ini jawaban'),(380,17,1,'2022-01-16 14:41:58.451',5,'dkucing'),(381,17,0,'2022-01-16 14:41:58.453',10,'ini jawaban'),(382,17,0,'2022-01-16 14:41:58.452',9,'ini jawaban'),(383,17,0,'2022-01-16 14:41:58.456',8,'ini jawaban'),(384,18,1,'2022-01-16 14:42:47.006',4,'dkucing'),(385,18,0,'2022-01-16 14:42:47.011',7,'ini jawaban'),(386,18,0,'2022-01-16 14:42:47.013',8,'ini jawaban'),(387,17,1,'2022-01-16 14:42:47.017',3,'dkucing'),(388,17,1,'2022-01-16 14:42:47.017',2,'dkucing'),(389,18,0,'2022-01-16 14:42:47.018',9,'ini jawaban'),(390,18,1,'2022-01-16 14:42:47.016',5,'dkucing'),(391,18,0,'2022-01-16 14:42:47.012',10,'ini jawaban'),(392,17,1,'2022-01-16 14:42:47.008',1,'dkucing'),(393,18,0,'2022-01-16 14:42:47.010',6,'ini jawaban'),(394,17,1,'2022-01-16 14:43:22.833',1,'dkucing'),(395,17,1,'2022-01-16 14:43:22.840',2,'dkucing'),(396,17,1,'2022-01-16 14:43:22.841',3,'dkucing'),(397,18,1,'2022-01-16 14:43:22.842',4,'dkucing'),(398,18,0,'2022-01-16 14:43:22.843',7,'ini jawaban'),(399,18,0,'2022-01-16 14:43:22.845',9,'ini jawaban'),(400,18,1,'2022-01-16 14:43:22.845',5,'dkucing'),(401,18,0,'2022-01-16 14:43:22.846',10,'ini jawaban'),(402,18,0,'2022-01-16 14:43:22.844',6,'ini jawaban'),(403,18,0,'2022-01-16 14:43:22.848',8,'ini jawaban'),(404,18,1,'2022-01-16 14:43:47.925',4,'dkucing'),(405,18,0,'2022-01-16 14:43:47.930',10,'ini jawaban'),(406,18,1,'2022-01-16 14:43:47.935',3,'dkucing'),(407,18,1,'2022-01-16 14:43:47.936',2,'dkucing'),(408,18,1,'2022-01-16 14:43:47.936',5,'dkucing'),(409,18,0,'2022-01-16 14:43:47.932',8,'ini jawaban'),(410,18,0,'2022-01-16 14:43:47.932',6,'ini jawaban'),(411,18,0,'2022-01-16 14:43:47.931',9,'ini jawaban'),(412,18,0,'2022-01-16 14:43:47.929',7,'ini jawaban'),(413,18,1,'2022-01-16 14:43:47.927',1,'dkucing'),(414,18,1,'2022-01-16 15:00:07.132',1,'dkucing'),(415,18,1,'2022-01-16 15:00:07.140',4,'dkucing'),(416,18,1,'2022-01-16 15:00:07.139',2,'dkucing'),(417,18,1,'2022-01-16 15:00:07.141',3,'dkucing'),(418,18,0,'2022-01-16 15:00:07.143',6,'ini jawaban'),(419,18,1,'2022-01-16 15:00:07.144',5,'dkucing'),(420,18,0,'2022-01-16 15:00:07.142',7,'ini jawaban'),(421,18,0,'2022-01-16 15:00:07.146',8,'ini jawaban'),(422,18,0,'2022-01-16 15:00:07.145',9,'ini jawaban'),(423,18,0,'2022-01-16 15:00:07.166',10,'ini jawaban'),(424,18,1,'2022-01-16 15:02:34.860',3,'dkucing'),(425,18,1,'2022-01-16 15:02:34.855',1,'dkucing'),(426,18,1,'2022-01-16 15:02:34.863',2,'dkucing'),(427,18,0,'2022-01-16 15:02:34.864',6,'ini jawaban'),(428,18,1,'2022-01-16 15:02:34.862',4,'dkucing'),(429,18,1,'2022-01-16 15:02:34.866',5,'dkucing'),(430,18,0,'2022-01-16 15:02:34.865',7,'ini jawaban'),(431,18,0,'2022-01-16 15:02:34.876',8,'ini jawaban'),(432,18,0,'2022-01-16 15:02:34.875',9,'ini jawaban'),(433,18,0,'2022-01-16 15:02:34.877',10,'ini jawaban'),(434,19,1,'2022-01-16 15:09:16.144',1,'dkucing'),(435,19,1,'2022-01-16 15:09:16.156',3,'dkucing'),(436,19,1,'2022-01-16 15:09:16.156',2,'dkucing'),(437,19,1,'2022-01-16 15:09:16.161',4,'dkucing'),(438,19,0,'2022-01-16 15:09:16.159',6,'akucing'),(439,19,1,'2022-01-16 15:09:16.157',5,'dkucing'),(440,19,0,'2022-01-16 15:09:16.160',7,'kucing'),(441,19,0,'2022-01-16 15:09:16.162',8,'kucing'),(442,19,0,'2022-01-16 15:09:16.161',10,'kucing'),(443,19,0,'2022-01-16 15:09:16.163',9,'kucing'),(444,19,1,'2022-01-16 15:13:31.429',6,'dkucing'),(445,19,1,'2022-01-16 15:13:31.434',7,'dkucing'),(446,19,0,'2022-01-16 15:13:31.444',10,'kucing'),(447,19,1,'2022-01-16 15:13:31.445',9,'dkucing'),(448,19,1,'2022-01-16 15:13:31.435',8,'dkucing'),(449,20,1,'2022-01-16 15:17:09.451',1,'dkucing'),(450,20,1,'2022-01-16 15:17:09.467',2,'dkucing'),(451,20,1,'2022-01-16 15:17:09.462',4,'dkucing'),(452,20,0,'2022-01-16 15:17:09.468',6,'kucing'),(453,20,1,'2022-01-16 15:17:09.464',3,'dkucing'),(454,20,1,'2022-01-16 15:17:09.469',5,'dkucing'),(455,20,0,'2022-01-16 15:17:09.469',7,'kucing'),(456,20,0,'2022-01-16 15:17:09.472',8,'kucing'),(457,20,0,'2022-01-16 15:17:09.472',9,'kucing'),(458,20,0,'2022-01-16 15:17:09.473',10,'kucing'),(459,20,1,'2022-01-16 15:18:14.793',8,'dkucing'),(460,20,0,'2022-01-16 15:18:14.795',10,'kucing'),(461,20,1,'2022-01-16 15:18:14.795',7,'dkucing'),(462,20,1,'2022-01-16 15:18:14.794',6,'dkucing'),(463,20,1,'2022-01-16 15:18:14.796',9,'dkucing'),(464,18,1,'2022-01-16 15:23:10.062',1,'dkucing'),(465,18,1,'2022-01-16 15:23:10.069',2,'dkucing'),(466,18,1,'2022-01-16 15:23:10.070',4,'dkucing'),(467,18,0,'2022-01-16 15:23:10.072',7,'ini jawaban'),(468,18,1,'2022-01-16 15:23:10.071',3,'dkucing'),(469,18,1,'2022-01-16 15:23:10.073',5,'dkucing'),(470,18,0,'2022-01-16 15:23:10.072',6,'ini jawaban'),(471,18,0,'2022-01-16 15:23:10.088',9,'ini jawaban'),(472,18,0,'2022-01-16 15:23:10.089',10,'ini jawaban'),(473,18,0,'2022-01-16 15:23:10.091',8,'ini jawaban'),(474,21,1,'2022-01-16 21:19:59.947',2,'dkucing'),(475,21,0,'2022-01-16 21:19:59.948',6,'bkucing'),(476,21,1,'2022-01-16 21:19:59.934',1,'dkucing'),(477,21,1,'2022-01-16 21:19:59.948',4,'dkucing'),(478,21,0,'2022-01-16 21:19:59.949',7,'akucing'),(479,21,1,'2022-01-16 21:19:59.950',5,'dkucing'),(480,21,0,'2022-01-16 21:19:59.952',10,'akucing'),(481,21,1,'2022-01-16 21:19:59.950',3,'dkucing'),(482,21,0,'2022-01-16 21:19:59.953',9,'akucing'),(483,21,0,'2022-01-16 21:19:59.954',8,'akucing'),(484,21,1,'2022-01-16 21:33:04.446',8,'dkucing'),(485,21,1,'2022-01-16 21:33:04.433',6,'dkucing'),(486,21,1,'2022-01-16 21:33:04.449',9,'dkucing'),(487,21,1,'2022-01-16 21:33:04.450',10,'dkucing'),(488,21,1,'2022-01-16 21:33:04.449',7,'dkucing'),(489,22,0,'2022-01-16 21:44:30.054',1,'kucing'),(490,22,0,'2022-01-16 21:44:30.059',5,'kucing'),(491,22,0,'2022-01-16 21:44:30.057',2,'kucing'),(492,22,1,'2022-01-16 21:44:30.063',7,'dkucing'),(493,22,0,'2022-01-16 21:44:30.062',4,'kucing'),(494,22,1,'2022-01-16 21:44:30.064',10,'dkucing'),(495,22,0,'2022-01-16 21:44:30.063',3,'kucing'),(496,22,1,'2022-01-16 21:44:30.060',6,'dkucing'),(497,22,1,'2022-01-16 21:44:30.066',8,'dkucing'),(498,22,1,'2022-01-16 21:44:30.065',9,'dkucing'),(499,22,1,'2022-01-16 21:45:27.662',2,'dkucing'),(500,22,1,'2022-01-16 21:45:27.664',5,'dkucing'),(501,22,1,'2022-01-16 21:45:27.664',3,'dkucing'),(502,22,1,'2022-01-16 21:45:27.666',4,'dkucing'),(503,22,1,'2022-01-16 21:45:27.663',1,'dkucing');
/*!40000 ALTER TABLE `Exam_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Indicators`
--

DROP TABLE IF EXISTS `Indicators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Indicators` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_subject` int NOT NULL,
  `topic` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_subject` (`id_subject`),
  CONSTRAINT `Indicators_ibfk_1` FOREIGN KEY (`id_subject`) REFERENCES `Subject_matterials` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Indicators`
--

LOCK TABLES `Indicators` WRITE;
/*!40000 ALTER TABLE `Indicators` DISABLE KEYS */;
INSERT INTO `Indicators` VALUES (1,1,'av','b','3.1','https://nova-storage-admin.s3.ap-southeast-1.amazonaws.com/remedialTeaching/indikator+3.1+-+Storyline+output/story.html',1),(2,1,'a','b','3.1','https://nova-storage-admin.s3.ap-southeast-1.amazonaws.com/remedialTeaching/indikator+3.1+-+Storyline+output/story.html',1),(3,1,'a','b','3.1','https://nova-storage-admin.s3.ap-southeast-1.amazonaws.com/remedialTeaching/indikator+3.1+-+Storyline+output/story.html',1),(4,1,'a','b','3.1','https://nova-storage-admin.s3.ap-southeast-1.amazonaws.com/remedialTeaching/indikator+3.1+-+Storyline+output/story.html',1),(5,2,'a','b','3.1','https://nova-storage-admin.s3.ap-southeast-1.amazonaws.com/remedialTeaching/indikator+3.1+-+Storyline+output/story.html',1),(6,2,'zxczxczx','asdasdasd','zxc','https://nova-storage-admin.s3.ap-southeast-1.amazonaws.com/remedialTeaching/indikator+3.1+-+Storyline+output/story.html',1),(7,2,'jadi2','bxxx','xxxa','22https://nova-storage-admin.s3.ap-southeast-1.amazonaws.com/remedialTeaching/indikator+3.1+-+Storyline+output/story.html',1),(8,1,'heh','213','123','123',1),(9,1,'newWorldss','213ss','123','https://nova-storage-admin.s3.ap-southeast-1.amazonaws.com/remedialTeaching/indikator+3.1+-+Storyline+output/story.html',0),(10,2,'hehe123','123','456','22https://nova-storage-admin.s3.ap-southeast-1.amazonaws.com/remedialTeaching/indikator+3.1+-+Storyline+output/story.html',0),(11,2,'asdasd','xzc','asd','aaacccdd',1);
/*!40000 ALTER TABLE `Indicators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Question_answers`
--

DROP TABLE IF EXISTS `Question_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Question_answers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_question` int NOT NULL,
  `status` tinyint(1) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `answer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_question` (`id_question`),
  CONSTRAINT `Question_answers_ibfk_2` FOREIGN KEY (`id_question`) REFERENCES `Questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Question_answers`
--

LOCK TABLES `Question_answers` WRITE;
/*!40000 ALTER TABLE `Question_answers` DISABLE KEYS */;
INSERT INTO `Question_answers` VALUES (1,1,0,0,'velicity make you hard'),(2,2,0,1,'gatot kaca'),(3,2,0,0,'gatot kaca'),(4,1,1,0,'asdasd'),(5,1,1,1,'asdasdxxx'),(6,1,1,1,'test'),(8,1,0,1,'asdasd'),(9,1,1,1,'test6'),(10,1,1,1,'test7'),(11,1,0,1,'test8'),(12,1,1,1,'test9'),(13,1,1,1,'test10'),(14,1,1,1,'asd'),(15,1,1,1,'hehe'),(21,1,0,1,'asd'),(22,1,1,1,'zxc'),(23,1,0,1,'qwe'),(24,1,1,1,'asd'),(25,1,0,1,'haha');
/*!40000 ALTER TABLE `Question_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Questions`
--

DROP TABLE IF EXISTS `Questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_indicator` int NOT NULL,
  `question` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `media` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_indicator` (`id_indicator`),
  CONSTRAINT `Questions_ibfk_1` FOREIGN KEY (`id_indicator`) REFERENCES `Indicators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Questions`
--

LOCK TABLES `Questions` WRITE;
/*!40000 ALTER TABLE `Questions` DISABLE KEYS */;
INSERT INTO `Questions` VALUES (1,1,'hello world aku no 2 deh',0,'www.facebook.com'),(2,2,'hello world2',1,'www.facebook2.com'),(3,2,'hello world2',0,'www.facebook2.com'),(4,3,'hello world2',0,'www.facebook2.com'),(5,4,'asdasd',0,'asdasd'),(6,2,'hello world2',0,'www.facebook2.com'),(7,4,'asdasd',0,'asdasd'),(12,2,'24532',0,'453543'),(18,3,'asd55',0,'asd55');
/*!40000 ALTER TABLE `Questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student_answers`
--

DROP TABLE IF EXISTS `Student_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Student_answers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_question` int NOT NULL,
  `id_questions_answers` int NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `id_detail_contract` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_question` (`id_question`),
  KEY `id_questions_answers` (`id_questions_answers`),
  KEY `id_detail_contract` (`id_detail_contract`),
  CONSTRAINT `Student_answers_ibfk_2` FOREIGN KEY (`id_question`) REFERENCES `Questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Student_answers_ibfk_3` FOREIGN KEY (`id_questions_answers`) REFERENCES `Question_answers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Student_answers_ibfk_4` FOREIGN KEY (`id_detail_contract`) REFERENCES `Detail_Contract` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student_answers`
--

LOCK TABLES `Student_answers` WRITE;
/*!40000 ALTER TABLE `Student_answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `Student_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Students`
--

DROP TABLE IF EXISTS `Students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Students.username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Students`
--

LOCK TABLES `Students` WRITE;
/*!40000 ALTER TABLE `Students` DISABLE KEYS */;
INSERT INTO `Students` VALUES (1,'studentcheck aja','A','new',1,'studentcheck1','studentcheck'),(3,'studentcheck','Avatar','new',1,'student','student'),(5,'studentcheck','Avatar','new',1,'student2','student2'),(6,'rizal rizal','a','new',1,'12345','rizal'),(7,'xxx','x','new',1,'x','x'),(8,'asd','asd','new',1,'asd','asd'),(10,'xsxsx','xsx','new',1,'xxxssx','xsss'),(12,'asdss','asd','new',1,'asdss','asdsss'),(13,'qwerty','qwerty','new',1,'qwerty','qwerty'),(14,'hahaha','haha','new',1,'hahahaha','haha'),(15,'Asep Solihin','A','new',1,'12345','asepsolihin'),(16,'aku','A','new',0,'aku','aku'),(17,'rizal rizal','a','new',0,'hehe','hehe'),(18,'aku','aku','new',0,'aku','akuaku'),(19,'19aja','19','new',0,'10','19'),(20,'20','20','new',0,'20','20'),(21,'newStudent','A','new',0,'newStudent','newStudent'),(22,'123456789','123456789','new',0,'123456789','123456789');
/*!40000 ALTER TABLE `Students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Subject_matterials`
--

DROP TABLE IF EXISTS `Subject_matterials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Subject_matterials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Subject_matterials`
--

LOCK TABLES `Subject_matterials` WRITE;
/*!40000 ALTER TABLE `Subject_matterials` DISABLE KEYS */;
INSERT INTO `Subject_matterials` VALUES (1,'aabcd',0),(2,'Helloo',0),(3,'Hello at there',1),(4,'adaada',1),(5,'aw',1);
/*!40000 ALTER TABLE `Subject_matterials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TryOut_Question`
--

DROP TABLE IF EXISTS `TryOut_Question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TryOut_Question` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option1` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option2` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option3` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option4` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `option5` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `created_At` datetime(3) NOT NULL,
  `trueAnswer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `media` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_Indicator` int NOT NULL,
  `idSubject` int NOT NULL,
  `noTopic` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Indicator` (`id_Indicator`),
  KEY `idSubject` (`idSubject`),
  CONSTRAINT `TryOut_Question_ibfk_1` FOREIGN KEY (`id_Indicator`) REFERENCES `Indicators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `TryOut_Question_ibfk_2` FOREIGN KEY (`idSubject`) REFERENCES `Subject_matterials` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TryOut_Question`
--

LOCK TABLES `TryOut_Question` WRITE;
/*!40000 ALTER TABLE `TryOut_Question` DISABLE KEYS */;
INSERT INTO `TryOut_Question` VALUES (13,'no 1 adalah','ini jawaban','ini salah1','ini salah2','ini salah3','ini salah4',0,'2022-01-14 19:44:21.307','ini jawaban','ini jawaban',1,1,1),(14,'no 1 adalah','ini jawaban1','ini salah1','ini salah2','ini salah3','ini salah4',0,'2022-01-14 19:44:31.144','ini jawaban1','ini jawaban',1,1,1),(15,'no 1 adalah','ini jawaban2','ini salah1','ini salah2','ini salah3','ini salah4',0,'2022-01-14 19:44:39.358','ini jawaban2','ini jawaban',1,1,1),(16,'no 1 adalah','ini jawaban2','https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216','ini salah2','ini salah3','ini salah4',1,'2022-01-14 20:28:26.161','ini jawaban2','ini jawaban',10,1,1),(17,'no 1 adalah','ini jawaban1','ini salah1','ini salah2','ini salah3','ini salah4',1,'2022-01-14 20:28:33.711','ini jawaban1','ini jawaban',10,1,1),(18,'no 1 adalah','ini jawaban0','ini salah1','ini salah2','ini salah3','ini salah4',1,'2022-01-14 20:28:37.782','ini jawaban0','ini jawaban',10,1,1),(19,'no 1 adalah','ini jawaban0','ini salah1','ini salah2','https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216','ini salah4',1,'2022-01-14 20:45:46.494','ini jawaban0','ini jawaban',9,1,1),(20,'no 1 adalah','ini jawaban0','ini salah1','ini salah2','ini salah3','ini salah4',1,'2022-01-14 20:46:15.123','ini jawaban0','ini jawaban',10,1,2),(21,'no 1 adalah','ini jawaban0','ini salah1','ini salah2','ini salah3','ini salah4',1,'2022-01-16 20:38:08.961','ini jawaban0','ini jawaban',10,1,2),(22,'apakah ini benar','kucings','akucings','bkucings','ckucings','dkucings',0,'2022-01-16 20:39:53.918','ckucings','453s',9,2,3);
/*!40000 ALTER TABLE `TryOut_Question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TryOut_answers`
--

DROP TABLE IF EXISTS `TryOut_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TryOut_answers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `studentId` int NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_At` datetime(3) NOT NULL,
  `id_TryOut_Question` int NOT NULL,
  `answer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_TryOut_Question` (`id_TryOut_Question`),
  KEY `studentId` (`studentId`),
  CONSTRAINT `TryOut_answers_ibfk_1` FOREIGN KEY (`id_TryOut_Question`) REFERENCES `TryOut_Question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `TryOut_answers_ibfk_2` FOREIGN KEY (`studentId`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=498 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TryOut_answers`
--

LOCK TABLES `TryOut_answers` WRITE;
/*!40000 ALTER TABLE `TryOut_answers` DISABLE KEYS */;
INSERT INTO `TryOut_answers` VALUES (316,16,0,'2022-01-16 09:19:32.190',19,'ini jawaban'),(317,16,0,'2022-01-16 09:19:32.197',16,'ini jawaban'),(318,16,0,'2022-01-16 09:21:34.019',19,'ini jawaban'),(319,16,0,'2022-01-16 09:21:34.026',16,'ini jawaban'),(320,16,0,'2022-01-16 09:22:50.007',16,'ini jawaban'),(321,16,0,'2022-01-16 09:22:50.001',19,'ini jawaban'),(322,16,0,'2022-01-16 09:23:56.339',19,'ini jawaban'),(323,16,0,'2022-01-16 09:23:56.344',16,'ini jawaban'),(324,16,0,'2022-01-16 09:25:21.807',19,'ini jawaban'),(325,16,0,'2022-01-16 09:25:21.812',16,'ini jawaban'),(326,18,0,'2022-01-16 10:06:20.573',19,'ini salah4'),(327,18,0,'2022-01-16 10:06:20.585',16,'ini salah4'),(328,18,0,'2022-01-16 10:09:13.633',17,'ini salah3'),(329,18,0,'2022-01-16 10:09:13.634',19,'ini salah3'),(330,18,0,'2022-01-16 10:09:32.790',18,'ini salah3'),(331,18,0,'2022-01-16 10:09:32.789',19,'ini salah3'),(332,18,0,'2022-01-16 10:11:16.397',20,'ini salah4'),(333,18,0,'2022-01-16 10:11:16.391',19,'ini salah4'),(334,18,0,'2022-01-16 10:11:55.067',19,'ini salah4'),(335,18,0,'2022-01-16 10:11:55.068',16,'ini salah4'),(336,18,0,'2022-01-16 10:12:01.386',17,'ini salah4'),(337,18,0,'2022-01-16 10:12:01.385',19,'ini salah4'),(338,18,0,'2022-01-16 10:14:34.520',19,'ini salah4'),(339,18,0,'2022-01-16 10:14:34.526',18,'ini salah4'),(340,18,0,'2022-01-16 10:14:40.621',19,'ini salah4'),(341,18,0,'2022-01-16 10:14:40.622',20,'ini salah4'),(342,18,0,'2022-01-16 10:14:46.355',19,'ini salah4'),(343,18,0,'2022-01-16 10:14:46.357',16,'ini salah4'),(344,18,0,'2022-01-16 10:15:22.716',19,'ini salah4'),(345,18,0,'2022-01-16 10:15:22.717',17,'ini salah4'),(346,18,0,'2022-01-16 10:15:26.684',19,'ini salah4'),(347,18,0,'2022-01-16 10:15:26.685',18,'ini salah4'),(348,18,0,'2022-01-16 10:15:30.811',19,'ini salah4'),(349,18,0,'2022-01-16 10:15:30.812',20,'ini salah4'),(350,18,0,'2022-01-16 10:21:24.982',19,'ini salah4'),(351,18,0,'2022-01-16 10:21:24.986',16,'ini salah4'),(352,18,0,'2022-01-16 10:21:28.659',19,'ini salah4'),(353,18,0,'2022-01-16 10:21:28.661',17,'ini salah4'),(354,18,0,'2022-01-16 10:21:32.125',19,'ini salah4'),(355,18,0,'2022-01-16 10:21:32.126',18,'ini salah4'),(356,18,0,'2022-01-16 10:22:30.181',20,'ini salah4'),(357,18,0,'2022-01-16 10:22:30.180',19,'ini salah4'),(358,18,0,'2022-01-16 10:22:33.573',19,'ini salah4'),(359,18,0,'2022-01-16 10:22:33.574',16,'ini salah4'),(360,18,0,'2022-01-16 10:22:37.250',19,'ini salah4'),(361,18,0,'2022-01-16 10:22:37.251',17,'ini salah4'),(362,18,0,'2022-01-16 10:23:51.358',19,'ini salah4'),(363,18,0,'2022-01-16 10:23:51.360',18,'ini salah4'),(364,18,0,'2022-01-16 10:23:55.237',19,'ini salah4'),(365,18,0,'2022-01-16 10:23:55.239',20,'ini salah4'),(366,18,0,'2022-01-16 10:23:59.378',19,'ini salah4'),(367,18,0,'2022-01-16 10:23:59.379',16,'ini salah4'),(368,18,0,'2022-01-16 10:24:42.291',19,'ini salah4'),(369,18,0,'2022-01-16 10:24:42.292',17,'ini salah4'),(370,18,0,'2022-01-16 10:24:45.982',19,'ini salah4'),(371,18,0,'2022-01-16 10:24:45.983',18,'ini salah4'),(372,18,0,'2022-01-16 10:24:49.751',19,'ini salah4'),(373,18,0,'2022-01-16 10:24:49.752',20,'ini salah4'),(374,18,0,'2022-01-16 10:26:41.705',19,'ini salah4'),(375,18,0,'2022-01-16 10:26:41.706',16,'ini salah4'),(376,18,0,'2022-01-16 10:26:45.118',19,'ini salah4'),(377,18,0,'2022-01-16 10:26:45.119',17,'ini salah4'),(378,18,0,'2022-01-16 10:26:48.665',19,'ini salah4'),(379,18,0,'2022-01-16 10:26:48.667',18,'ini salah4'),(380,18,0,'2022-01-16 10:28:38.296',19,'ini salah4'),(381,18,0,'2022-01-16 10:28:38.298',20,'ini salah4'),(382,18,0,'2022-01-16 10:28:41.714',19,'ini salah4'),(383,18,0,'2022-01-16 10:28:41.716',16,'ini salah4'),(384,18,0,'2022-01-16 10:28:46.384',17,'ini salah4'),(385,18,0,'2022-01-16 10:28:46.388',19,'ini salah4'),(386,18,0,'2022-01-16 10:29:30.548',19,'ini salah4'),(387,18,0,'2022-01-16 10:29:30.549',18,'ini salah4'),(388,18,0,'2022-01-16 10:29:34.181',19,'ini salah4'),(389,18,0,'2022-01-16 10:29:34.182',20,'ini salah4'),(390,18,0,'2022-01-16 10:29:37.901',19,'ini salah4'),(391,18,0,'2022-01-16 10:29:37.903',16,'ini salah4'),(392,18,0,'2022-01-16 10:30:28.753',19,'ini salah4'),(393,18,0,'2022-01-16 10:30:28.754',17,'ini salah4'),(394,18,0,'2022-01-16 10:30:32.418',19,'ini salah4'),(395,18,0,'2022-01-16 10:30:32.420',18,'ini salah4'),(396,18,0,'2022-01-16 10:30:35.398',19,'ini salah4'),(397,18,0,'2022-01-16 10:30:35.399',20,'ini salah4'),(398,18,0,'2022-01-16 10:31:01.300',16,'ini salah4'),(399,18,0,'2022-01-16 10:31:01.299',19,'ini salah4'),(400,18,0,'2022-01-16 10:31:05.859',19,'ini salah4'),(401,18,0,'2022-01-16 10:31:05.860',17,'ini salah4'),(402,18,0,'2022-01-16 10:31:10.062',19,'ini salah4'),(403,18,0,'2022-01-16 10:31:10.063',18,'ini salah4'),(404,18,0,'2022-01-16 10:32:07.093',19,'ini salah4'),(405,18,0,'2022-01-16 10:32:07.094',20,'ini salah4'),(406,18,0,'2022-01-16 10:32:10.363',19,'ini salah4'),(407,18,0,'2022-01-16 10:32:10.364',16,'ini salah4'),(408,18,0,'2022-01-16 10:32:14.028',19,'ini salah4'),(409,18,0,'2022-01-16 10:32:14.029',17,'ini salah4'),(410,18,1,'2022-01-16 10:32:36.094',19,'ini jawaban0'),(411,18,1,'2022-01-16 10:32:36.093',18,'ini jawaban0'),(412,18,0,'2022-01-16 10:34:49.986',18,'ini salah4'),(413,18,0,'2022-01-16 10:34:49.992',19,'ini salah4'),(414,18,0,'2022-01-16 10:34:54.895',20,'ini salah4'),(415,18,0,'2022-01-16 10:34:54.896',19,'ini salah4'),(416,18,0,'2022-01-16 10:35:07.832',19,'ini salah4'),(417,18,0,'2022-01-16 10:35:07.833',16,'ini salah4'),(418,18,0,'2022-01-16 10:35:14.524',19,'ini salah4'),(419,18,0,'2022-01-16 10:35:14.526',17,'ini salah4'),(420,18,1,'2022-01-16 10:35:20.640',19,'ini jawaban0'),(421,18,1,'2022-01-16 10:35:20.640',18,'ini jawaban0'),(422,18,1,'2022-01-16 10:35:57.776',19,'ini jawaban0'),(423,18,1,'2022-01-16 10:35:57.781',18,'ini jawaban0'),(424,18,1,'2022-01-16 10:37:09.723',19,'ini jawaban0'),(425,18,1,'2022-01-16 10:37:09.730',18,'ini jawaban0'),(426,18,1,'2022-01-16 10:37:30.901',19,'ini jawaban0'),(427,18,1,'2022-01-16 10:37:30.907',18,'ini jawaban0'),(428,18,1,'2022-01-16 10:38:10.864',18,'ini jawaban0'),(429,18,1,'2022-01-16 10:38:10.856',19,'ini jawaban0'),(430,18,1,'2022-01-16 10:38:31.216',19,'ini jawaban0'),(431,18,1,'2022-01-16 10:38:31.222',18,'ini jawaban0'),(432,18,1,'2022-01-16 10:40:01.270',18,'ini jawaban0'),(433,18,1,'2022-01-16 10:40:01.264',19,'ini jawaban0'),(434,18,1,'2022-01-16 14:47:04.959',20,'ini jawaban0'),(435,19,0,'2022-01-16 15:08:33.703',16,'ini salah2'),(436,19,0,'2022-01-16 15:08:33.713',19,'ini salah2'),(437,19,0,'2022-01-16 15:08:38.964',19,'ini salah4'),(438,19,1,'2022-01-16 15:08:38.966',17,'ini jawaban1'),(439,19,0,'2022-01-16 15:09:30.082',18,'ini salah2'),(440,19,0,'2022-01-16 15:12:56.936',20,'ini salah4'),(441,19,0,'2022-01-16 15:12:59.636',16,'ini salah4'),(442,19,0,'2022-01-16 15:13:02.109',17,'ini salah4'),(443,19,1,'2022-01-16 15:13:15.973',18,'ini jawaban0'),(444,20,1,'2022-01-16 15:16:45.800',19,'ini jawaban0'),(445,20,0,'2022-01-16 15:16:45.809',16,'ini salah4'),(446,20,0,'2022-01-16 15:17:37.950',17,'ini salah4'),(447,20,0,'2022-01-16 15:17:41.094',18,'ini salah4'),(448,20,0,'2022-01-16 15:17:45.121',20,'ini salah4'),(449,20,0,'2022-01-16 15:17:58.295',16,'ini salah4'),(450,20,0,'2022-01-16 15:18:01.107',17,'ini salah4'),(451,20,1,'2022-01-16 15:18:03.776',18,'ini jawaban0'),(452,17,0,'2022-01-16 21:08:54.133',19,'ini jawaban'),(453,17,0,'2022-01-16 21:08:54.144',16,'ini jawaban'),(454,21,0,'2022-01-16 21:15:07.927',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216'),(455,21,0,'2022-01-16 21:15:07.933',16,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216'),(456,21,0,'2022-01-16 21:15:14.452',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216'),(457,21,0,'2022-01-16 21:15:14.453',17,'ini salah3'),(458,21,0,'2022-01-16 21:15:18.006',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216'),(459,21,0,'2022-01-16 21:15:18.008',18,'ini salah2'),(460,21,1,'2022-01-16 21:15:51.587',19,'ini jawaban0'),(461,21,0,'2022-01-16 21:15:51.588',20,'ini salah4'),(462,21,0,'2022-01-16 21:20:17.611',21,'ini salah4'),(463,21,0,'2022-01-16 21:20:24.402',16,'ini salah3'),(464,21,0,'2022-01-16 21:20:28.397',17,'ini salah4'),(465,21,0,'2022-01-16 21:20:34.442',18,'ini salah3'),(466,21,0,'2022-01-16 21:20:59.078',20,'ini salah3'),(467,21,0,'2022-01-16 21:21:07.630',21,'ini salah3'),(468,21,0,'2022-01-16 21:21:58.909',16,'ini salah2'),(469,21,0,'2022-01-16 21:22:12.194',17,'ini salah3'),(470,21,0,'2022-01-16 21:23:24.681',18,'ini salah4'),(471,21,0,'2022-01-16 21:25:06.131',20,'ini salah4'),(472,21,0,'2022-01-16 21:27:10.992',21,'ini salah4'),(473,21,0,'2022-01-16 21:27:44.527',16,'ini salah4'),(474,21,0,'2022-01-16 21:28:05.547',17,'ini salah4'),(475,21,0,'2022-01-16 21:28:10.754',18,'ini salah4'),(476,21,0,'2022-01-16 21:29:28.122',20,'ini salah4'),(477,21,0,'2022-01-16 21:30:04.901',21,'ini salah4'),(478,21,0,'2022-01-16 21:31:36.475',16,'ini salah4'),(479,21,0,'2022-01-16 21:31:52.400',17,'ini salah4'),(480,21,0,'2022-01-16 21:32:26.528',18,'ini salah4'),(481,21,0,'2022-01-16 21:32:29.676',20,'ini salah4'),(482,21,0,'2022-01-16 21:32:32.823',21,'ini salah3'),(483,21,0,'2022-01-16 21:32:47.627',16,'ini salah4'),(484,21,1,'2022-01-16 21:32:51.949',17,'ini jawaban1'),(485,22,0,'2022-01-16 21:43:40.189',16,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216'),(486,22,0,'2022-01-16 21:43:40.192',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216'),(487,22,0,'2022-01-16 21:43:44.299',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216'),(488,22,0,'2022-01-16 21:43:44.300',17,'ini salah2'),(489,22,0,'2022-01-16 21:43:47.933',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216'),(490,22,0,'2022-01-16 21:43:47.934',18,'ini salah3'),(491,22,0,'2022-01-16 21:44:11.322',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216'),(492,22,1,'2022-01-16 21:44:11.323',20,'ini jawaban0'),(493,22,0,'2022-01-16 21:44:52.786',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216'),(494,22,0,'2022-01-16 21:44:55.998',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216'),(495,22,0,'2022-01-16 21:44:59.521',19,'https://ik.imagekit.io/tiaherdi/Latihan/lat_ind3.5.5_topik3_Rm_ak8PJT.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642336098216'),(496,22,0,'2022-01-16 21:45:10.388',19,'ini salah4'),(497,22,1,'2022-01-16 21:45:13.060',19,'ini jawaban0');
/*!40000 ALTER TABLE `TryOut_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('018aae85-7c1c-4b41-9467-e67a44a34fe6','a518a8c381a867b0dee54de12f5306461a280da517d8fffd84541d206f87fd0a','2021-09-29 04:45:21.504','20210929044521_reset_question_answer',NULL,NULL,'2021-09-29 04:45:21.459',1),('0b1d94cd-847a-4785-942c-252e824a24c2','503f369d7a660895086ccc436b92adbd9f6056eecf1641a009de6fbd51d2acaa','2021-12-27 07:22:53.364','20211227072253_',NULL,NULL,'2021-12-27 07:22:53.336',1),('13223783-df37-42cc-8df2-c2800688fe66','bea64940f051360676b416a072f7e21f4aa19930e8f30b9bb39627f5f6547c56','2021-12-24 09:26:41.429','20211224092641_',NULL,NULL,'2021-12-24 09:26:41.409',1),('35cec7da-3376-46b7-bfd9-03129ad32730','c58c20d3981f3caef17c731b76c346302a7d9b50557aea9308a47e7f64069456','2021-07-26 15:24:36.638','20210726152435_full_database',NULL,NULL,'2021-07-26 15:24:35.927',1),('38ea8a4a-1463-4f4d-9618-3e5c1127f77a','27000bccfaae9d8a9750ee51d44a1087358fb27476a009748cd6ffca984dfa25','2021-12-28 11:45:25.696','20211228114525_',NULL,NULL,'2021-12-28 11:45:25.626',1),('3e99640d-21e9-4489-80e4-a49bd5693250','79f01e5c98eeab53bbc837dbd1c875b5ac2954db614e066dbd0f5a472c685877','2021-12-09 08:45:45.943','20211209084545_',NULL,NULL,'2021-12-09 08:45:45.921',1),('4b3f1450-9a92-4854-96d7-e581b4ed45e8','b2229915be3f19559bbc707c44d1b1be2fb7dd79d7df9577678576f161db68b0','2021-12-09 08:51:08.397','20211209085108_',NULL,NULL,'2021-12-09 08:51:08.354',1),('52c2d9d1-6774-43be-89f7-203849700f43','54fb95b82025f930a02883fadb04363c2de0adbe437436446d0738691978a7d5','2021-12-09 08:41:58.188','20211209084158_',NULL,NULL,'2021-12-09 08:41:58.165',1),('56e00873-97c1-4bf2-bb5e-b1a2238c1c76','611710b64bad68cd83e3ca3ce07eb74f16dce1bca5c36e0f03da3e1dc0ffff4a','2021-08-09 06:34:42.374','20210809063442_refix_acc_id',NULL,NULL,'2021-08-09 06:34:42.316',1),('59a698ff-7fec-4a38-b410-3401dd64f937','100c3d1f556231bb10f6cb77c3f93e9c48626ba278904bf3c644c8ec5cd37de8','2021-07-26 15:24:23.845','20210726135545_add_account_types_student_and_admins',NULL,NULL,'2021-07-26 15:24:23.785',1),('5b8abcba-4e62-4531-81bb-3df138abc3a8','4f44de3afe77cabf12626bdc01eee44af3e37e903173905dbcc1486ae3e8ec19','2021-08-10 04:24:44.283','20210810042443_new_database',NULL,NULL,'2021-08-10 04:24:43.807',1),('67f603c9-457e-491d-9708-b9f4c05b9ff7','623f30a18b819f73fa245a17d053fd250e529c84c2492468ef25008948350bef','2021-09-29 04:38:35.698','20210929043835_fixing_diagnostik_answer',NULL,NULL,'2021-09-29 04:38:35.528',1),('731bb130-b3ea-4da5-8e78-26ab2566e494','970224e3ae9b8e393e3e6b4dbc149e97b1528b9ac9df4023d8ce2a00a8c7435e','2021-12-28 11:56:33.862','20211228115633_',NULL,NULL,'2021-12-28 11:56:33.820',1),('75c88ecb-ee95-47f2-b9ee-cb51119c91b8','f0b897a5460a63010536e07601d74573a40c6239fe3f33a957f5e05fdaa53011','2022-01-10 18:32:12.273','20220110183212_',NULL,NULL,'2022-01-10 18:32:12.025',1),('7a71e920-4625-48d8-8cb2-f892d6603613','027d8b7a66073b9b3c5453285951ff04941ba428603b1cb6e96f4e648f353101','2021-07-28 06:13:43.157','20210728061343_add_soft_delete',NULL,NULL,'2021-07-28 06:13:43.015',1),('949f092b-8fa7-4fd1-a27e-5bf377383f1e','618d45cf022a82c99668bae7e9b51a0b11f2ba2150b30050c2eb4297f2c9a0fc','2022-01-06 11:42:06.333','20220106114206_',NULL,NULL,'2022-01-06 11:42:06.194',1),('9a69d36c-4d77-49e7-b246-052f180f0110','e84315897e6813f943c8e22ab10813d4150c118b6c132e428cdd9450d13b8cf2','2022-01-13 12:43:47.536','20220113124347_',NULL,NULL,'2022-01-13 12:43:47.512',1),('b25f58f4-5818-4677-98d2-ee4fb60a570a','d138234e001259a094e8023657989b8237b5d5b627afa87fd08b693c1b6598b7','2021-08-10 04:27:00.277','20210810042700_add_username_and_password_in_table_admins',NULL,NULL,'2021-08-10 04:27:00.247',1),('b45ef18b-54fc-4e73-ae66-7c7f25ce4912','93ed5165914b8bfc26f80a24e5b144d2b5c45edf1be467d03eefd08924335cac','2022-01-06 07:44:25.921','20220106074425_',NULL,NULL,'2022-01-06 07:44:25.812',1),('bc7bd560-b51c-470a-bca2-a792aaf2239c','077523c73c462ee89e4aa4f36e5ff6dba741efabd68250ec5ec4e003edb15c65','2021-12-09 08:34:26.616','20211209083426_',NULL,NULL,'2021-12-09 08:34:26.508',1),('cda57e6a-1137-469a-9c17-0dd2d11c726e','071521b9b53f62c7e6a465d3c84eb69fce9b56b6e23831c28ecab56847f7a216','2021-09-29 04:28:57.676','20210929042857_add_diagnostik_amswers',NULL,NULL,'2021-09-29 04:28:57.515',1),('d5a08bca-eb65-409c-95e4-993e89253bdc','e1445a409e2f9a7a472cdb0c5fe382dc0ac29f6ffca38d67068a4e78fa53e441','2021-09-28 14:34:17.717','20210928143417_add_boolean_studen_answers',NULL,NULL,'2021-09-28 14:34:17.698',1),('e4fba67e-3ef7-4a24-9514-2d0841d8c566','449dd33fa7bdb9676b1d6c9c838061531b9e55f1cd10a78d6f50b0cfc92b40ce','2022-01-14 19:39:37.252','20220114193937_',NULL,NULL,'2022-01-14 19:39:37.227',1),('e87c995f-4dc0-46f2-9ac4-acd5321e809e','78c113da4825a3be4febfa659efb4601e36756abfcb1e42ff5ed6de8aac83bbb','2022-01-13 01:42:13.632','20220113014213_',NULL,NULL,'2022-01-13 01:42:13.420',1),('f077d357-8de4-4c43-8d37-eabb85bba8bb','cea13a5ee277def598ee8802776a97f392089b4f1b7a4926b2e709e5de20cd81','2022-01-16 08:19:51.418','20220116081951_',NULL,NULL,'2022-01-16 08:19:51.299',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-17  5:13:33
