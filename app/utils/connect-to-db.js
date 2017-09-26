'use strict';

let Promise = require('bluebird');

let pg = require("pg");
let dbConfig = require('pg-connection-string').parse(process.env.DATABASE_URL || 'postgres://root@localhost:5432/db');
dbConfig.max = 10; dbConfig.idleTimeoutMillis = 3000;
let pgPool = new pg.Pool(dbConfig);

function makeOneQuery(sql, opts) {
  if (opts && opts.showQuery) {console.log(sql);}
  return new Promise((resolve, reject) => {
    pgPool.connect((err, client, done) => {
      if (err) reject();
      let clientPromise = Promise.promisifyAll(client);
      clientPromise.query(sql,[])
      .then((res) => {
        done();
        resolve(res.rows);
      })
      .catch((err) => {console.log(err);})
    });
  });
}

function makeMultipleQuery(sqlArray, opts, next) {
    let finalArray = [];
    return sqlArray.reduce((promise, sql) => {
        return promise.then(() => {
          return makeOneQuery(sql).then((result) => {
            finalArray.push(result);
            return finalArray;
          });
        });
    },  Promise.resolve());

}

module.exports = function(req, sql, opts) {
  if (typeof sql === 'string') {
    return makeOneQuery(sql, opts);
  }
  else if(Object.prototype.toString.call(sql) === '[object Array]') {
    return makeMultipleQuery(sql, opts);
  }
};
