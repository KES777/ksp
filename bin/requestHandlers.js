var exec = require("child_process").exec;


function start( response ) {
	console.log("Request handler 'start' was called.");

	function sleep(milliSeconds) {
		var startTime =  new Date().getTime();
		while( new Date().getTime() < startTime + milliSeconds );
	}

	var content =  "empty";

	exec(
		"find /"
		,{ timeout: 10000, maxBuffer: 20000*1024 }
		,function (error, stdout, stderr) {
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write( stdout );
			response.end();

			console.log( "Request for 'start' were processed." );
		}
	);
}


function upload( response ) {
	console.log("Request handler 'upload' was called.");

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();

	console.log( "Request for 'upload' were processed." );
}


exports.start  =  start;
exports.upload =  upload;
