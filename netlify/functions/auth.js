const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-secret-key'; // Replace with your own secret key

exports.handler = async function(event, context) {
  const { username, password } = JSON.parse(event.body);

  // Validate user credentials (this should be more robust in a real app)
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return {
      statusCode: 200,
      body: JSON.stringify({ token })
    };
  }
  return {
    statusCode: 401,
    body: JSON.stringify({ message: 'Invalid credentials' })
  };
};
