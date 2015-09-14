var server_application =  require("./server");
var router             =  require("./router");

server_application.start( router.route );
