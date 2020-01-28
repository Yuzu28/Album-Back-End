//Import the dotenv module
//Call its `.config()` method 
require('dotenv').config();


const pgp = require('pg-promise')({
    //logs SQL Queries to the
    query: (e) => console.log(e.query)

});

const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database:process.env.DB_NAME
    // host: "127.0.0.1",
    // port: 5432,
    // database: "todo-app"
});

console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
console.log(process.env.DB_NAME);

console.log('yeah');

module.exports = db

//below
//execute all the queries you need
//now fetch it

// db.any(`
// select * from photojj
// `)
//     .then((data) => {

//         console.log('here is data');
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('there is an error');
//         console.log(err);

//     })



//when you want one and only one,
//user the .one() method.
//that way, if you don't find it,
//it triggers the .catch()
//this is better than doing an if/else
//inside your .then
db.one(`
    select * from photojj where id=1
    `)
        .then((data) => {
    
            console.log('here is data');
            console.log(data);
        })
        .catch((err) => {
            console.log('there is an error');
            console.log(err);
    
        })







