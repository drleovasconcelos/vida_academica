// dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'index.html';
        return;
    }

    fetchDashboardData();
    setupLogoutButton();
});

async function fetchDashboardData() {
    try {
        const response = await fetch('/api/dashboard', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            updateDashboard(data);
        } else {
            throw new Error('Falha ao buscar dados do dashboard');
        }
    } catch (error) {
        console.error('Erro ao buscar dados do dashboard:', error);
        alert('Ocorreu um erro ao carregar os dados do dashboard.');
    }
}

function updateDashboard(data) {
    document.getElementById('security-alerts').textContent = data.security_alerts;
    document.getElementById('active-users').textContent = data.active_users;
    document.getElementById('inventory-status').textContent = data.inventory_status;

    updateResourcesChart(data.resources);
    updateRecentActivities(data.recent_activities);
}

function updateResourcesChart(resources) {
    const ctx = document.getElementById('resources-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: resources.map(r => r.name),
            datasets: [{
                label: 'Quantidade',
                data: resources.map(r => r.quantity),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateRecentActivities(activities) {
    const recentActivitiesList = document.getElementById('recent-activities');
    recentActivitiesList.innerHTML = '';
    activities.forEach(activity => {
        const li = document.createElement('li');
        li.className = 'list-group-item bg-secondary';
        li.textContent = activity;
        recentActivitiesList.appendChild(li);
    });
}

function setupLogoutButton() {
    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        window.location.href = 'index.html';
    });
}
