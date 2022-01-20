const express = require('express');
const api = require('./api/api.js');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/messages', (req, res) => {
  api.getAllMessages()
    .then(result => res.json(result.data))
    .catch(err => console.log('ERROR', err));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});