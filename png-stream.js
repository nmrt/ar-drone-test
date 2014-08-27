var http = require('http');
var arDrone = require('ar-drone');
var client = arDrone.createClient();
var pngStream = client.getPngStream();

var server = http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'multipart/x-mixed-replace; boundary=--boundary'
  });

  pngStream.on('data', function(data) {
    var headers = [
      '--boundary',
      'Content-Type: image/png',
      'Content-length: ' + data.length,
      '\n'
    ].join('\n');

    console.log(data.length, data);

    response.write(headers);
    response.write(data);
  });
});

console.log('Open http://localhost:3000 in FF only!');
server.listen(3000);
