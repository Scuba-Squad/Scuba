const db = require('./../postgresql.js');

module.exports = {
  getSubCategories(req, res, next) {
    db.any('SELECT name,_id, category_id FROM "subcategory"')
      .then(function(data) {
        //success
        res.json(data);
        return next;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  addSubCategory(req, res, next) {
    let { name, category_id } = req.body;
    db.one(
      'INSERT INTO subcategory(name, category_id) VALUES($1, $2) RETURNING _id,name, category_id',
      [name, category_id]
    )
      .then(data => {
        res.json(data);
        return next;
      })
      .catch(error => {
        console.log('ERROR:', error); // print error;
      });
  },
  deleteSubCategory(req, res, next) {
    let subCategoryID = parseInt(req.params.id);
    db.result('DELETE FROM subcategory WHERE _id=$1', subCategoryID)
      .then(result => {
        res.status(200).send('successfully deleted data');
        return next;
      })
      .catch(err => {
        return err;
      });
  },
  updateSubCategory(req, res, next) {
    let { name, category_id, _id } = req.body;
    db.query(
      'UPDATE subcategory SET name=$1, category_id=$2 WHERE _id=$3 RETURNING _id, name, category_id',
      [name, category_id, _id]
    )
      // .then(result => {
      //   res.json(result);
      //   // res.status(200).send('successfully updated data');
      // })
      .then(result => {
        res.status(200).json(result);
        return next;
      })
      .catch(err => {
        return err;
      });
  }
};
