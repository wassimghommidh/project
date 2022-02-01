

CREATE DATABASE proj;

USE proj;

CREATE TABLE vid (
  id int NOT NULL AUTO_INCREMENT,
  file varchar(350) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/