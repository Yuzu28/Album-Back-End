const pgp = require('pg-promise')();
const config={
    'database': 'photos-app',
    'host':'localhost'
};

const db = pgp(config);

module.exports = db