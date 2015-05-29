var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function(connection){
    console.log("a new client connection is established");
    connection.on("text", function(msg){
        server.connections.forEach(function(connection){
            connection.sendText(msg);
        });
    });
});
server.listen(9595);
console.log("Socket server listening on port 9595");
