
const db = require('../db');

function getAll(){
    //below
// execute all the queries you need
// now fetch it
    db.any(`
        select * from photojj
    `)
        .then((data) => {
    
            console.log('here is data');
            console.log(data);
        })
        .catch((err) => {
            console.log('there is an error');
            console.log(err);
    
        })


}





function getOne(id){
    //when you want one and only one,
//user the .one() method.
//that way, if you don't find it,
//it triggers the .catch()
//this is better than doing an if/else
//inside your .then
//.one will throw an exception if it sees more than one
//get only 1 and only 1.
    db.one(`
            select * from photojj where id=$1
            `, [id])
                .then((data) => {
            
                    console.log('here is data');
                    console.log(data);
                })
                .catch((err) => {
                    console.log('there is an error');
                    console.log(err);
            
                })

    }

module.exports = {

     getAll,
     getOne
}
