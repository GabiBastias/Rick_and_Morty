const http = require('http');
const data = require('./data')
const PORT = 3001;

module.exports = 
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")) {
        const urlSplit = req.url.split("/");
        const characterID = urlSplit[urlSplit.length-1];
        const dataID = data.find(character => character.id === Number(characterID))
        
        res.end(JSON.stringify(dataID));
    } else {
        res.writeHead(404, {"Content-type": "text/plain"});
        res.end("Route not found");
    }
}).listen(PORT, "localhost")