const express = require('express');
const path = require('path');
const api = require('./api/api.js');

const app = express();

app.use(express.json());
app.use('/', express.static('public'));
app.use('/presentation', express.static('presentation'));

app.get('/messages', (req, res) => {
  api.getAllMessages()
    .then(result => res.json(result.data))
    .catch(err => {
      console.log('ERROR', err);
      res.send('ERROR GETTING MESSAGES');
    });
});

app.get('/api', (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const count = 15;
  api.getMessages(page, count)
    .then(result => res.json(result.data))
    .catch(err => {
      console.log('ERROR', err);
      res.send('ERROR GETTING MESSAGES FROM MY API');
    });
});

app.get('/api/rooms', (req, res) => {
  api.getRooms()
    .then(result => res.json(result.data))
    .catch(err => {
      console.log('ERROR', err);
      res.send('ERROR GETTING ROOMS FROM MY API');
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});