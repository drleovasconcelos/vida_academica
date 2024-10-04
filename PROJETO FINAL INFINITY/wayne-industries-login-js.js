// login.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.access_token);
                localStorage.setItem('refresh_token', data.refresh_token);
                window.location.href = 'dashboard.html';
            } else {
                const errorData = await response.json();
                alert(`Erro de login: ${errorData.detail}`);
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Ocorreu um erro ao tentar fazer login.');
        }
    });
});
