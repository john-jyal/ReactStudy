CREATE TABLE `housedeal` (  
	`no` int DEFAULT NULL,
    `dong` text,
    `AptName` text,
    `code` int DEFAULT NULL,
    `dealAmount` text,
    `buildYear` int DEFAULT NULL,
    `dealYear` int DEFAULT NULL,
    `dealMonth` int DEFAULT NULL,
    `dealDay` int DEFAULT NULL,
    `area` double DEFAULT NULL,
    `floor` int DEFAULT NULL,
    `jibun` text,
    `type` int DEFAULT NULL,
    `rentMoney` text
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
