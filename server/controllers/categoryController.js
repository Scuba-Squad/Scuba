const db = require('./../postgresql.js');

module.exports = {
  getCategories(req, res, next) {
    db.any('SELECT name FROM "category"')
      .then(function(data){
        //success
        res.json(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
