var server_application =  require("./server");
var router             =  require("./router");
var requestHandlers    =  require("./requestHandlers");

var handle          =  {};
handle[ "/" ]       =  requestHandlers.start;
handle[ "/start" ]  =  requestHandlers.start;
handle[ "/upload" ] =  requestHandlers.upload;
handle[ "/ajax" ]   =  requestHandlers.ajax;

server_application.start( router.route, handle );
