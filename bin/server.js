var http =  require("http");
var url  =  require("url");


function start( route, handlers ) {
	function onRequest (request, response) {
		var pathname =  url.parse(request.url).pathname;
		console.log( "Request for " + pathname + " received." );

		route( pathname, handlers, response );
		console.log( "Request for " +pathname + " were routed." );
	}

	var server =  http.createServer( onRequest );
	server.listen(8888);

	console.log( 'Server has started.' );
}

exports.start = start;
