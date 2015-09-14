var http =  require("http");
var url  =  require("url");


function start( route, handlers ) {
	function onRequest (request, response) {
		var pathname =  url.parse(request.url).pathname;
		console.log( "Request for " + pathname + " received." );

		var content =  route( pathname, handlers );

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write( content );
		response.end();
		console.log( "Request for " +pathname + " processed." );
	}

	var server =  http.createServer( onRequest );
	server.listen(8888);

	console.log( 'Server has started.' );
}

exports.start = start;
