const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Lógica para validar usuario
  if (email === 'user@example.com' && password === 'password') {
    res.status(200).send({ message: 'Sesión iniciada correctamente!' });
  } else {
    res.status(401).send({ message: 'Datos invalidos!' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
