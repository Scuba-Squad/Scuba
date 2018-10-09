const express = require('express');
const app = express();
const http = require('http');
const db = require('./postgresql.js');
let pg = require('pg');

//retrieve data from category
db.query('SELECT name FROM category')
  .then(result => {
    result.forEach(row => {
      console.log(row.name);
    });
  })
  .catch(error => {
    console.log('ERROR AT CATEGORY: ', error);
  });

const server = http.createServer(app);

app.get('/test', (req, res) => res.status(400).send('testing'));

server.listen(8080, () => {
  console.log('listening at http://localhost:8080');
});
