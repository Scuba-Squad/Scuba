const express = require('express');
const app = express();
const http = require('http');
const db = require('./postgresql.js');
const bodyParser = require('body-parser');
const cors = require('cors');
let pg = require('pg');

const Categories = require('./controllers/categoryController');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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

// get all categories
app.get('/categories', Categories.getCategories, (req, res) => {
  res.status(200).send('successfully connected to categories');
});

// delete category
app.delete('/categories/:id', Categories.deleteCategory, (req, res) => {
  res.status(200).send('successfully deleted a category');
});

server.listen(8080, () => {
  console.log('listening at http://localhost:8080');
});
