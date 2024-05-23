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

http.createServer((req, res) => {
    res.status("NIKITA MALAVIYA");
}).listen(3004, () => {
    console.log("COME ON 3004");
});

http.createServer((req, res) => {
    res.status("NIKITA MALAVIYA");
}).listen(3005, () => {
    console.log("HERE ON 3005");
});

http.createServer((req, res) => {
    res.status("NIKITA MALAVIYA");
}).listen(3006, () => {
    console.log("GO ON 3006");
});

http.createServer((req, res) => {
    res.status("NIKITA MALAVIYA");
}).listen(3007, () => {
    console.log("SOME ON 3007");
});

http.createServer((req, res) => {
    res.status("NIKITA MALAVIYA");
}).listen(3008, () => {
    console.log("SOMEONE ON 3008");
});

http.createServer((req, res) => {
    res.status("NIKITA MALAVIYA");
}).listen(3009, () => {
    console.log("NOTHING ON 3009");
});

http.createServer((req, res) => {
    res.status("NIKITA MALAVIYA");
}).listen(3010, () => {
    console.log("SOMETHING ON 3010");
});

console.log("hello world !!!");