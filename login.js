document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validCredentials = [
        { username: 'admin', password: 'password123' },
        { username: 'user1', password: 'mypassword' }
        // Add more valid credentials as needed
    ];

    const isValid = validCredentials.some(cred => cred.username === username && cred.password === password);

    if (isValid) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
