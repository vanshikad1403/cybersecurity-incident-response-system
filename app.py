from flask import Flask, render_template, jsonify, request
import mysql.connector

app = Flask(__name__)

def get_db():
    return mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="GUNGUN64A",
        database="cybersecurity_db"
    )

@app.route('/')
def dashboard():
    return render_template('dashboard.html')

@app.route('/events_page')
def events_page():
    return render_template('events.html')

@app.route('/alerts_page')
def alerts_page():
    return render_template('alerts.html')

@app.route('/actions_page')
def actions_page():
    return render_template('actions.html')

# APIs
@app.route('/events')
def events():
    db = get_db()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Events")
    data = cursor.fetchall()
    cursor.close()
    db.close()
    return jsonify(data)

@app.route('/alerts')
def alerts():
    db = get_db()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Alerts")
    data = cursor.fetchall()
    cursor.close()
    db.close()
    return jsonify(data)

@app.route('/actions')
def actions():
    db = get_db()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Mitigation_Actions")
    data = cursor.fetchall()
    cursor.close()
    db.close()
    return jsonify(data)

@app.route('/add_action', methods=['POST'])
def add_action():
    data = request.json
    db = get_db()
    cursor = db.cursor()

    cursor.execute(
        "INSERT INTO Mitigation_Actions (alert_id, action_taken, status) VALUES (%s,%s,%s)",
        (data['alert_id'], data['action_taken'], "Pending")
    )

    db.commit()
    cursor.close()
    db.close()

    return jsonify({"message": "Action Added"})

@app.route('/update_action/<int:id>', methods=['POST'])
def update_action(id):
    db = get_db()
    cursor = db.cursor()

    cursor.execute(
        "UPDATE Mitigation_Actions SET status='Completed' WHERE action_id=%s",
        (id,)
    )

    db.commit()
    cursor.close()
    db.close()

    return jsonify({"message": "Updated"})

if __name__ == '__main__':
    app.run(debug=True)