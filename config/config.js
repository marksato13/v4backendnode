const promise = require('bluebird');

const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);

const types = pgp.pg.types;

types.setTypeParser(1114, function (stringValue){
    return stringValue;
});

//------------------- Configuración de la base de datos -------------------
const databaseConfig = {
    'host': '127.0.0.1',
    'port': 5432,
    'database': 'fluflu_db',
    'user': 'postgres',
    'password': '12344'
};

const db = pgp(databaseConfig);

module.exports = db;
