require('dotenv').config()
const pg = require('pg');
const config = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
};
const pool = new pg.Pool(config);
pool.connect(function (err, client) {
  if (err) {
    console.log(err);
  } else {
    client.query('SELECT FROM posts', function (err, result) {
      console.log(result); //コンソール上での確認用なため、この1文は必須ではない。
    });
    pool.end()
  }
});