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

## ▶️ How to Run the Project

1. Import the database:

   * Open MySQL Workbench
   * Run `schema.sql`

2. Update database credentials in `app.py`

3. Run the application:

   ```
   python app.py
   ```

4. Open browser:

   ```
   http://127.0.0.1:5000
   ```

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

(Add your project screenshot here)

---

## 👩‍💻 Author

Vanshika Dubey

