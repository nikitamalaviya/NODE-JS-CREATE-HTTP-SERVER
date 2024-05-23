// console.log(__dirname);
// let {name} = require('__dirname');

// console.log(name);




let http = require('http');
const name = require('./test');

http.createServer((req, res) =>{
    res.status ("NIKITA MALAVIYA")
}).listen(3001, () => {
    console.log("server running on 3001");
});

http.createServer((req, res) =>{
    res.status ("NIKITA MALAVIYA")
}).listen(3002, () => {
    console.log("HELLO on 3002");
});

http.createServer((req, res) => {
    res.status("NIKITA MALAVIYA");
}).listen(3003, () => {
    console.log("WELCOME on 3003");
});





console.log("hello world !!!");