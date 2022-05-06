const faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({
    secret: process.env.FAUNA,
    domain: 'db.us.fauna.com',
    scheme: 'https',
});

module.exports = {
    client,
    q
};