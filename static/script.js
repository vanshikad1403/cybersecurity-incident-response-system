// =========================
// LOAD EVENTS
// =========================
fetch('/events')
.then(res => res.json())
.then(data => {
    let table = document.getElementById("eventsTable");

    // Reset table
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Severity</th>
        </tr>
    `;

    // Insert data
    data.forEach(e => {
        console.log("Event:", e);

        table.innerHTML += `
        <tr>
            <td>${e.event_id}</td>
            <td>${e.event_type}</td>
            <td>${e.severity}</td>
        </tr>`;
    });
})
.catch(err => {
    console.error("Events Error:", err);
    alert("Error loading events");
});


// =========================
// LOAD ALERTS
// =========================
fetch('/alerts')
.then(res => res.json())
.then(data => {
    let table = document.getElementById("alertsTable");

    // Reset table
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Status</th>
        </tr>
    `;

    // Insert data
    data.forEach(a => {
        console.log("Alert:", a);

        table.innerHTML += `
        <tr>
            <td>${a.alert_id}</td>
            <td>${a.alert_type}</td>
            <td>${a.status}</td>
        </tr>`;
    });
})
.catch(err => {
    console.error("Alerts Error:", err);
    alert("Error loading alerts");
});


// =========================
// SUBMIT MITIGATION ACTION
// =========================
document.getElementById("actionForm").addEventListener("submit", function(e) {
    e.preventDefault();  // prevent page reload

    let alert_id = document.getElementById("alert_id").value;
    let action_taken = document.getElementById("action_taken").value;

    // Validation
    if (!alert_id || !action_taken) {
        alert("Please fill all fields");
        return;
    }

    fetch('/add_action', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            alert_id: parseInt(alert_id),
            action_taken: action_taken
        })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        location.reload(); // refresh page
    })
    .catch(err => {
        console.error("Submit Error:", err);
        alert("Error submitting action");
    });
});