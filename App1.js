const http = require('http');
const url = require('url');
//const {parse} = require('querystring');

http.createServer((request, response) => {
    if (request.method == 'GET') {
        let urlRequest = url.parse(request.url, true);
        let a1 = urlRequest.query.a1 ;
        response.end(a1);
    }
}).listen(3000);
