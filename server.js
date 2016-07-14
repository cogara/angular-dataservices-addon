var express = require('express');
var index = require('./routes/index.js');
var olympics = require('./routes/olympics.js');

var app = express();

//static files
app.use(express.static('public'));


//routers
app.use('/', index);
app.use('/olympics', olympics);
// app.use('/synchronizedSwimming', synchronizedSwimming);
// app.use('/tableTennis', tableTennis);
// app.use('/badminton', badminton);
// app.use('/wrestling', wrestling);
// app.use('/gymnastics', gymnastics);

var server = app.listen(process.env.PORT || 3100, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
