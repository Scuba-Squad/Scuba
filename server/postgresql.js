// initialize connection with PostgreSQL database
const connection =
  'postgres://jzadxofs:RhhxwkDuEVCDowy2UCKYDsQP61iiz--s@pellefant.db.elephantsql.com:5432/jzadxofs';

const pgp = require('pg-promise')(/*options*/);
const db = pgp(connection);

module.exports = db;
