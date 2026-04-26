// DASHBOARD
if (document.getElementById("totalEvents")) {
    fetch('/events')
    .then(res => res.json())
    .then(data => {
        document.getElementById("totalEvents").innerText = data.length;
    });
}

if (document.getElementById("totalAlerts")) {
    fetch('/alerts')
    .then(res => res.json())
    .then(data => {
        document.getElementById("totalAlerts").innerText = data.length;
    });
}

// EVENTS
if (document.getElementById("eventsTable")) {
    fetch('/events')
    .then(res => res.json())
    .then(data => {
        let table = document.getElementById("eventsTable");
        table.innerHTML = `<tr><th>ID</th><th>Type</th><th>Severity</th></tr>`;

        data.forEach(e => {
            table.innerHTML += `
            <tr>
                <td>${e.event_id}</td>
                <td>${e.event_type}</td>
                <td>${e.severity}</td>
            </tr>`;
        });
    });
}

// ALERTS
if (document.getElementById("alertsTable")) {
    fetch('/alerts')
    .then(res => res.json())
    .then(data => {
        let table = document.getElementById("alertsTable");
        table.innerHTML = `<tr><th>ID</th><th>Type</th><th>Status</th></tr>`;

        data.forEach(a => {
            table.innerHTML += `
            <tr>
                <td>${a.alert_id}</td>
                <td>${a.alert_type}</td>
                <td>${a.status}</td>
            </tr>`;
        });
    });
}

// ADD ACTION
function addAction() {
    let alert_id = document.getElementById("alert_id").value;
    let action = document.getElementById("action_taken").value;

    fetch('/add_action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ alert_id: parseInt(alert_id), action_taken: action })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        location.reload();
    });
}

// ACTION HISTORY
if (document.getElementById("actionsTable")) {
    fetch('/actions')
    .then(res => res.json())
    .then(data => {
        let table = document.getElementById("actionsTable");

        table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Alert ID</th>
            <th>Action</th>
            <th>Status</th>
            <th>Update</th>
        </tr>`;

        data.forEach(a => {
            table.innerHTML += `
            <tr>
                <td>${a.action_id}</td>
                <td>${a.alert_id}</td>
                <td>${a.action_taken}</td>
                <td class="${a.status === 'Completed' ? 'completed' : 'pending'}">
                    ${a.status}
                </td>
                <td>
                    ${
                        a.status === 'Pending'
                        ? `<button class="complete-btn" onclick="markComplete(${a.action_id})">Mark Done</button>`
                        : "✔"
                    }
                </td>
            </tr>`;
        });
    });
}

// MARK COMPLETE
function markComplete(id) {
    fetch(`/update_action/${id}`, { method: 'POST' })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        location.reload();
    });
}
// DASHBOARD EXTRA DATA

if (document.getElementById("highEvents")) {

    fetch('/events')
    .then(res => res.json())
    .then(data => {

        document.getElementById("totalEvents").innerText = data.length;

        let high = data.filter(e => e.severity === "High").length;
        document.getElementById("highEvents").innerText = high;

        let table = document.getElementById("recentEvents");

        table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Severity</th>
        </tr>`;

        data.slice(-5).forEach(e => {
            table.innerHTML += `
            <tr>
                <td>${e.event_id}</td>
                <td>${e.event_type}</td>
                <td>${e.severity}</td>
            </tr>`;
        });
    });
}

if (document.getElementById("openAlerts")) {

    fetch('/alerts')
    .then(res => res.json())
    .then(data => {

        document.getElementById("totalAlerts").innerText = data.length;

        let open = data.filter(a => a.status === "Open").length;
        let closed = data.filter(a => a.status === "Closed").length;

        document.getElementById("openAlerts").innerText = open;
        document.getElementById("closedAlerts").innerText = closed;
    });
}