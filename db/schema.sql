DROP DATABASE IF EXISTS department_db;

CREATE DATABASE department_db;

USE department_db;

CREATE TABLE department (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
       
    );
CREATE TABLE roles (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL (12, 2) NOT NULL,
        department_id INT NOT NULL,
        FOREIGN KEY (department_id)
        REFERENCES department(id)
    );
CREATE TABLE employee (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT NOT NULL,
        manager_id INT NOT NULL
        REFERENCES id,
        FOREIGN KEY (role_id)
        REFERENCES roles(id)
        
    );