const net = require('net');
const JsonSocket = require('json-socket');
const mongoose = require('mongoose');

// Initialize DB
require('./initDB')();

//connect to the database
// mongoose.connect(process.env.MONGODB_URI, {
//       dbName: process.env.DB_NAME,
//       user: process.env.DB_USER,
//       pass: process.env.DB_PASS,
//       useNewUrlParser: true
//     }).then(() => {
//       console.log('....  Mongodb connected  ....');
//       console.log('....  Mongodb connected  ....');
//     }).catch(err => console.log(err.message));

// // check connection
// mongoose.connection.on('connected', () => {
//     console.log('.... Mongoose connected to db ....');
// });

// // require template model
const Template = require('./models/Templete');

const port = 8282;
const socket = new JsonSocket(new net.Socket());
console.log("..... Hello from the client side .....");



socket.connect({
    port: port,
    host: "tcp_server"
});
socket.on('connect', () => {
    socket.on('message', (data) => {
        
        console.log("logging data from the client")
        console.log(data)
        // putting data into the database
        // run()
        // async function run() {
        //     const temp = await Template.create(data)
        //     console.log(temp)
        // }

    });
});
