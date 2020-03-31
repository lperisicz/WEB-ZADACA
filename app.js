const http = require('http');
const randomUser = require('random-user');
const hostname = '127.0.0.1';
const port = 3000;

async function generateResponse() {
    let users = [];
    for(let i= 0; i < 20; i++) users[i] = randomUser('simple');
    return JSON.stringify(await Promise.all(users))
}

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(await generateResponse());
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});