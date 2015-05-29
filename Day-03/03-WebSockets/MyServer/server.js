var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function(connection){
    console.log("a new client connection is established");
    var timer = setInterval(function(){
        connection.sendText(new Date().toString());
    }, 3000);
    connection.on("text", function(msg){
       if (msg === "stop"){
           console.log("stopping timer");
           clearInterval(timer);
       } else {
           console.log("unknown msg ", msg);
       }
    });
});
server.listen(9595);
console.log("Socket server listening on port 9595");
