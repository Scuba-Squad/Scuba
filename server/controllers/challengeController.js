const db = require('./../postgresql.js');

module.exports = {
  getChallenges(req, res, next) {
    db.any('SELECT name, _id, subcategory_id, problem, solution FROM "challenge"')
      .then(function(data) {
        res.json(data);
        return next;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

};