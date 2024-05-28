const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock authentication (for demonstration purposes)
const users = [
    { username: 'admin', password: 'password' }
];

// Endpoint for authentication
app.post('/api/authenticate', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ success: true, message: 'Authenticated successfully' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Endpoint for script injection
app.post('/api/inject', (req, res) => {
    const { script } = req.body;
    // Here you would add the logic to inject the script into Roblox
    console.log('Injecting script:', script);
    res.status(200).json({ success: true, message: 'Script injected successfully' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
