var express = require('express');
var index = require('./routes/index.js');
var olympics = require('./routes/olympics.js');

var app = express();

//static files
app.use(express.static('public'));

//localhost:3000/olympics/synchronizedSwimming

//routers
app.use('/', index);
app.use('/olympics', olympics);
app.use('/synchronizedSwimming', index);
app.use('/tableTennis', index);
app.use('/badminton', index);
app.use('/wrestling', index);
app.use('/gymnastics', index);

var server = app.listen(process.env.PORT || 3100, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
