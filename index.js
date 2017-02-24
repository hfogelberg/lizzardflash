var express = require('express'),
      app = express(),
       history = require('connect-history-api-fallback'),
       port = process.env.PORT || 3000;

app.use(history());
console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile('index.html');
});

app.listen(port, function(){
  console.log('App running on port ' + port);
});
