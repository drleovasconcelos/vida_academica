-- schema.sql
CREATE DATABASE IF NOT EXISTS wayne_industries;

USE wayne_industries;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100),
    full_name VARCHAR(100),
    role ENUM('employee', 'manager', 'admin') NOT NULL
);

CREATE TABLE inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    status ENUM('active', 'maintenance', 'decommissioned') NOT NULL
);

CREATE TABLE logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(255) NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Inserir alguns dados de exemplo
INSERT INTO users (username, password, email, full_name, role) VALUES
('bruce', '$2b$12$1234567890123456789012.1234567890123456789012345678901234', 'bruce@wayne.com', 'Bruce Wayne', 'admin'),
('alfred', '$2b$12$2345678901234567890123.2345678901234567890123456789012345', 'alfred@wayne.com', 'Alfred Pennyworth', 'manager'),
('lucius', '$2b$12$3456789012345678901234.3456789012345678901234567890123456', 'lucius@wayne.com', 'Lucius Fox', 'employee');

INSERT INTO inventory (name, quantity, status) VALUES
('Batmobile', 1, 'active'),
('Batsuit', 3, 'active'),
('Batarang', 50, 'active'),
('Grappling Hook', 10, 'active');
