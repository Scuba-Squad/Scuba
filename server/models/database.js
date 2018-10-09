const pg = require('pg');

const db = {};
const uri =
  'postgres://jzadxofs:RhhxwkDuEVCDowy2UCKYDsQP61iiz--s@pellefant.db.elephantsql.com:5432/jzadxofs';

pg.connect(
  uri,
  (err, db_) => {
    if (err) throw new Error(err);

    db.conn = db_;
    console.log('connected to database');
  }
);

module.exports = db;
