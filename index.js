var express = require('express');
var app = express();

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT);