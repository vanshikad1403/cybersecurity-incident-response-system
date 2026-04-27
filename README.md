# 🔐 Cybersecurity Incident Response System

## 📌 Project Description

This project is a **DBMS-based web application** that models cybersecurity incidents.
It helps in tracking system events, generating alerts, and recording mitigation actions taken to resolve security issues.

---

## 🛠 Technologies Used

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Python (Flask)
* **Database:** MySQL

---

## 🧩 Database Design

### Entities:

* **Events:** Stores system activities (e.g., login failure, file access)
* **Alerts:** Represents suspicious activities derived from events
* **Mitigation_Actions:** Stores actions taken to resolve alerts *(Weak Entity)*

---

## 🔗 Relationships

* One Event → Many Alerts
* One Alert → Many Mitigation Actions

---

## ⚠️ Key Concept

**Mitigation_Actions is a weak entity** because it depends on Alerts and cannot exist independently.

---

## 🔄 Features

* View system events
* View alerts
* Add mitigation actions
* Full-stack integration (Frontend + Backend + Database)

---

## 📊 Project Flow

User → Frontend (HTML/JS) → Flask (Backend) → MySQL Database → Response → UI

---

## 🎓 Learning Outcomes

* Database design (ER model, relationships, weak entity)
* SQL queries and CRUD operations
* Backend development using Flask
* Frontend-backend integration using APIs

---

## 📸 Screenshot

<img width="1919" height="979" alt="image" src="<img width="1918" height="982" alt="Screenshot 2026-04-27 133800" src="https://github.com/user-attachments/assets/d2464760-f502-4488-af0d-547df25a20ac" />
src="<img width="1918" height="1036" alt="Screenshot 2026-04-27 140444" src="https://github.com/user-attachments/assets/407c28b2-d0e5-4866-b406-bddc4e53c2a1" />
src="<img width="1919" height="1039" alt="Screenshot 2026-04-27 140456" src="https://github.com/user-attachments/assets/6065a13f-aff7-40c2-b027-9226ef531dad" />
src="<img width="1919" height="1027" alt="Screenshot 2026-04-27 140505" src="https://github.com/user-attachments/assets/8c2c6db1-6f23-4db7-af75-8e52f026b7c2" />

" />


---

## 👩‍💻 Author

Vanshika Dubey

