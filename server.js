var express= require('express');
var app=express();
var bodyParser = require('body-parser');

app.use(cors())
app.use(express.static(__dirname + "/frontend"));
app.use(bodyParser.json());

app.listen(3000, function (){
  console.log("Server listening to port 3000");
});
