const net = require('net');
const JsonSocket = require('json-socket');
// const mongoose = require('mongoose');

// Initialize DB
// require('./initDB')();

// // require template model
// const Template = require('./models/Templete');

const port = 8282;
const host = "localhost";
const socket = new JsonSocket(new net.Socket());

socket.connect(port);
socket.on('connect', () => {
    socket.on('message', (data) => {
        

        console.log("Hello from the client side does it gets called");
        console.log("logging data from the client" + data);

        // console.log(data);

        // putting data into the database
        // run()
        // async function run() {
        //     const temp = await Template.create(data)
        //     // console.log(temp)
        // }

    });
});
