from flask import Flask, render_template, jsonify, request
import mysql.connector

app = Flask(__name__)

def get_db():
    return mysql.connector.connect(
        host="127.0.0.1",
        user="vanshika",   
        password="GUNGUN^$A",  
        database="cybersecurity_db"
    )

# Home
@app.route('/')
def home():
    return render_template('index.html')


# =========================
# EVENTS API
# =========================
@app.route('/events')
def events():
    try:
        db = get_db()
        cursor = db.cursor(dictionary=True)

        cursor.execute("SELECT * FROM Events")
        data = cursor.fetchall()

        cursor.close()
        db.close()

        return jsonify(data)

    except Exception as e:
        print("EVENT ERROR:", e)
        return jsonify({"error": str(e)}), 500


# =========================
# ALERTS API
# =========================
@app.route('/alerts')
def alerts():
    try:
        db = get_db()
        cursor = db.cursor(dictionary=True)

        cursor.execute("SELECT * FROM Alerts")
        data = cursor.fetchall()

        cursor.close()
        db.close()

        return jsonify(data)

    except Exception as e:
        print("ALERT ERROR:", e)
        return jsonify({"error": str(e)}), 500


# =========================
# ADD MITIGATION ACTION
# =========================
@app.route('/add_action', methods=['POST'])
def add_action():
    try:
        data = request.json

        db = get_db()
        cursor = db.cursor()

        query = """
        INSERT INTO Mitigation_Actions (alert_id, action_taken, status)
        VALUES (%s, %s, %s)
        """

        cursor.execute(query, (
            data['alert_id'],
            data['action_taken'],
            "Pending"
        ))

        db.commit()

        cursor.close()
        db.close()

        return jsonify({"message": "Action Added Successfully"})

    except Exception as e:
        print("INSERT ERROR:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)