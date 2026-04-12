CREATE DATABASE cybersecurity_db;
USE cybersecurity_db;

CREATE TABLE Events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_type VARCHAR(100),
    severity VARCHAR(20)
);

CREATE TABLE Alerts (
    alert_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    alert_type VARCHAR(100),
    status VARCHAR(20),
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);

CREATE TABLE Mitigation_Actions (
    action_id INT PRIMARY KEY AUTO_INCREMENT,
    alert_id INT,
    action_taken TEXT,
    action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20),
    FOREIGN KEY (alert_id) REFERENCES Alerts(alert_id)
);

-- Sample Data
INSERT INTO Events (event_type, severity) VALUES
('Login Failure', 'High'),
('File Access', 'Medium');

INSERT INTO Alerts (event_id, alert_type, status) VALUES
(1, 'Brute Force', 'Open'),
(2, 'Suspicious Access', 'Closed');