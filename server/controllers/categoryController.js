const db = require('./../postgresql.js');

module.exports = {
  getCategories(req, res, next) {
    db.any('SELECT name,_id FROM "category"')
      .then(function(data) {
        //success
        res.json(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  deleteCategory(req, res, next) {
    let categoryID = parseInt(req.params.id);
    db.result('DELETE FROM category WHERE _id=$1', categoryID)
      .then(result => {
        res.status(200).send('successfully deleted data');
        return next;
      })
      .catch(err => {
        return err;
      });
    // db.any('DELETE FROM "category" WHERE name="algorithms"')
    //   .then(() => {
    //     console.log('sucessfully deleted');
    //   })
    //   .catch(error => {
    //     console.log('error: ', error);
    //   });
  }
};
