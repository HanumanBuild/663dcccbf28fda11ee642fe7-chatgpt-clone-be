const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/messages', (req, res) => {
  res.status(200).send('GET request to the homepage');
});

app.post('/messages', (req, res) => {
  res.status(201).send('POST request to the homepage');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});