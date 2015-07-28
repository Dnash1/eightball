var net = require("net");
var fs = require("fs");

var port = 2000;

var answers = ["It is certain",
"It is decidedly so",
"Without a doubt",
"Yes definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"];



var server = net.createServer(function(connection) {
	console.log("User connected");
	connection.write("Ask your question mortal \n");
	connection.on("data", function(data){
		var rand = answers[Math.floor(Math.random() * answers.length)];
		connection.write(rand + "\n");
	})
})

server.listen(port, function() {
	console.log("Any port in a storm. (" + port + ")");
})