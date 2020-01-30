const http = require('http');

const dataStuff = require('./Models/Photo');

const server = http.createServer((req,res) => {
    console.log("YOOOOOOOOOO got a request");
    const allData = dataStuff.getAll();
    allData
        .then((data) =>{
            console.log("NNNNNNNNNNN");
            console.log(data);
            res.end(JSON.stringify(data));
        })
    console.log("/n/n/n =======================")
    // res.end(allData);
});

server.listen(3000);