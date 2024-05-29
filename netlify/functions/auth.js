const jwt = require('jsonwebtoken');
const SECRET_KEY = '9dF6!kjd8K3@s7kJdsf8lKds#Mjd7@9Jdk'; // Replace with your own secret key

exports.handler = async function(event, context) {
  const { username, password } = JSON.parse(event.body);

  // Validate user credentials (this should be more robust in a real app)
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, 9dF6!kjd8K3@s7kJdsf8lKds#Mjd7@9Jdk, { expiresIn: '1h' });
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
