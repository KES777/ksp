var exec = require("child_process").exec;
var querystring = require("querystring");


function start( response, postData ) {
	console.log("Request handler 'start' was called.");

	var body = '<html>'
	+'<head>'
	+    '<meta http-equiv="Content-Type" content="text/html; '
	+    'charset=UTF-8" />'
	+    '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>'
	+    '<script type="text/javascript">'
	+    '  function test() {'
	+    '      $.ajax({'
	+    '          url: "/ajax",'
	+    '          data: {'
	+    '              zipcode: 97201'
	+    '          },'
	+    '          success: function( data ) {'
	+    '              $( "#weather-temp" ).html( "<strong>" + data + "</strong>" );'
	+    '          }'
	+    '       });'
	+    '   }'
	+    '</script>'
	+'</head>'
	+'<body>'
	+    '<form action="/upload" method="post">'
	+        '<textarea name="text" rows="20" cols="60"></textarea>'
	+        '<input type="submit" value="Submit text" />'
	+    '</form>'
	+    '<div id="weather-temp">Some text</div>'
	+    '<input type="button" onclick="test()" value="Do request" />'
	+'</body>'
	+'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();

	console.log( "Request for 'start' were processed." );
}



function upload( response, postData ) {
	console.log("Request handler 'upload' was called.");

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent the text:\n" +querystring.parse(postData).text );
	response.end();

	console.log( "Request for 'upload' were processed." );
}



function ajax( response, postData ) {
	console.log("Request handler 'upload' was called.");

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write( "Hi, people!" );
	response.end();

	console.log( "Request for 'upload' were processed." );
}


exports.start  =  start;
exports.upload =  upload;
exports.ajax   =  ajax;
