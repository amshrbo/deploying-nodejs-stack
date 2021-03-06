const net = require('net');
const dummyjson = require('dummy-json');
const JsonSocket = require('json-socket');

// getting error at the end of creationDate there was an additional ,
const template = `{
    "receiver": {
        "firstName": "{{firstName}}",
        "lastName": "{{lastName}}",
        "email": "{{email}}"
    },
    "price": {{float 10 200 '0.00'}},
    "address": {
        "country": "{{country}}",
        "city": "{{city}}",
        "street": "{{street}}",
        "coordinates": {
            "x": {{float -50 50 '0.00'}},
            "y": {{float -25 25 '0.00'}}
        }
    },
    "creationDate": "{{date '2015' '2021' }}"
}`;

const port = 8282;
const server = net.createServer();
server.listen(port);

server.on('connection', function(socket) {
    socket = new JsonSocket(socket);
    streamInterval = setInterval(function() {
        const data = dummyjson.parse(template);
        socket.sendMessage(data);
    }, 30000);
});
