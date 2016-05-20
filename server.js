var express = require('express'); 
var server = express();
var bodyParser = require('body-parser');
var	apiKey = 'AC5c491fd19a50a024decf807c472647b9';
var	authToken = 'a87e42e64af5d26c2f20e6e61a269a3a';
// Your accountSid and authToken from twilio.com/user/account
var accountSid = apiKey;
var authToken = authToken;
var client = require('twilio')(accountSid, authToken);
 
server.set('view engine', 'ejs')
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json());
server.use(express.static('public'));

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.get('/', function(req, res, next){
	res.status(200).render('dignity')
})

server.post('/sendInfo', function(req, res, next){
	console.log(req.body);
	// var message = "Congrats David. You are the website owner of chuyenhausu.com. -MT Productions. This will be actual text: \n"
	var message = "Name: " + req.body.first_name + " " + req.body.last_name + ". \n";
	message += "Address: " + req.body.address + ", " + req.body.city + ", " + req.body.state + ", " + req.body.zip_code + ". \n";
	message += "Number: " + req.body.number + ".";
	// client.messages.create({
 //    body: message,
 //    to: "+18324907333",
 //    from: "+14255239592"
	// }, function(err, message) {
	// 	console.log(err)
 //    process.stdout.write(message.sid);
	// });
	res.send("done");
})

server.listen((3000), function(req, res){
  console.log("listening on " + (3000))
})
