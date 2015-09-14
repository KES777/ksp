var http =  require("http");
var url  =  require("url");


function start( route, handlers ) {
	function onRequest (request, response) {
		var pathname =  url.parse(request.url).pathname;
		console.log( "Request for " + pathname + " received." );

		var postData = "";
		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk) {
			postData +=  postDataChunk;
			console.log("Received POST data chunk '" +postDataChunk +"'.");
		});

		request.addListener("end", function() {
			route( pathname, handlers, response, postData );
			console.log( "Request for " +pathname + " were routed." );
		});

		console.log( "Request for " +pathname + " were preprocessed." );
	}

	var server =  http.createServer( onRequest );
	server.listen(8888);

	console.log( 'Server has started.' );
}

exports.start = start;
