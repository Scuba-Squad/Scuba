const express = require('express');
const app = express();
const http = require('http');
// const db = require('./models/database.js');
let pg = require('pg');
const uri =
  'postgres://jzadxofs:RhhxwkDuEVCDowy2UCKYDsQP61iiz--s@pellefant.db.elephantsql.com:5432/jzadxofs';

// const pgp = require('pg-promise');

let pgClient = new pg.Client(uri);
pgClient.connect();

let query = pgClient
  .query('SELECT name FROM category')
  // .then(result => result)
  .then(result =>
    result.rows.forEach(row => {
      console.log(row.name);
    })
  );

// let connect = {
//   host: '@pellefant.db.elephantsql.com',
//   port: 5432,
//   database: 'jzadxofs',
//   user: 'jzadxofs',
//   password: 'RhhxwkDuEVCDowy2UCKYDsQP61iiz'
// };

// let db = pgp(connect);
// let db = pgp(
//   'postgres://jzadxofs:RhhxwkDuEVCDowy2UCKYDsQP61iiz--s@pellefant.db.elephantsql.com:5432/jzadxofs'
// );

const server = http.createServer(app);
// const eventCtrl = require('./controllers/event-controller');

app.get('/test', (req, res) => res.status(400).send('testing'));

server.listen(8080, () => {
  console.log('listening at http://localhost:8080');
});
