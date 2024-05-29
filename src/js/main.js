async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/.netlify/functions/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    document.getElementById('login').style.display = 'none';
    document.getElementById('executor').style.display = 'block';
  } else {
    alert('Invalid credentials');
  }
}

async function executeScript() {
  const script = document.getElementById('script').value;
  const token = localStorage.getItem('token');

  const response = await fetch('/.netlify/functions/inject', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ script })
  });

  const data = await response.json();
  alert(data.message);
}
