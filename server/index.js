var express = require('express');
var morgan = require('morgan');
var request = require('request')

var app = express();

app.use(morgan('dev'));

app.use('/', function(req, res) {
    
    var str = req.url.slice(1);
    console.log(`Routing to ${str}`);
    var route = request(str);
    req.pipe(route).pipe(res);
})

app.listen(8080, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${8080}`)
})