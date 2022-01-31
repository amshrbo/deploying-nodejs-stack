const net = require('net');
const JsonSocket = require('json-socket');
const mongoose = require('mongoose');

// Initialize DB
require('./initDB')();

// require template model
const Template = require('./models/Templete');

const port = 8282;
const socket = new JsonSocket(new net.Socket());

socket.connect({
    port: port,
    host: "tcp_server"
});
socket.on('connect', () => {
    socket.on('message', (data) => {
        
        console.log(".... logging data from the client ....");
        try{            
            const datajson = JSON.parse(data);
            run()
            async function run(){
                try{
                    const temp = await Template.create(datajson);
                    console.log(".... A new entry have been inserted ....");
                    console.log(temp);
                    console.log(".... .... .... ... ... ... ... ...  ....");
                }catch(e) {console.log(e.message)}
            }

        } catch(e){console.log(e.message)}

    });
});
