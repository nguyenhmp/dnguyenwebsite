var express = require('express'); 
var server = express();
var bodyParser = require('body-parser');
var apiKey = 'AC5c491fd19a50a024decf807c472647b9';
var authToken = 'a87e42e64af5d26c2f20e6e61a269a3a';
// Your accountSid and authToken from twilio.com/user/account
var accountSid = apiKey;
var authToken = authToken;
var client = require('twilio')(accountSid, authToken);
console.log(client);
 
client.messages.create({
    body: "Hello buddy, isnt this cool?",
    to: "+15613190727",
    from: "+14255239592"
}, function(err, message) {
		console.log(err)
    process.stdout.write(message.sid);
});

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

// // server.get('/', function(req, res, next){
// //   myCache.get( "results", function( err, value ){
// //     if( !err ){
// //       if(value == undefined){
// //         async.parallel({
// //           select: dbController.select,
// //           topBusinessInCountry: dbController.topBusinessInCountry
// //         },
// //         function(err, results) {
// //           myCache.set( "results", results, function( err, success ){
// //             if( !err && success ){
// //               res.status(200).render('index', results)
// //             }
// //           });
// //         });
// //       }else{
// //         res.status(200).render('index', value)
// //       }
// //     }
// //   });
// // })

// // server.post('/businesses', function(req, res, next){
// //   var number = req.body.insertNumber;
// //   console.log(number);
// //   dbController.insertBusiness(number);
// //   res.redirect('/');
// // })

server.listen((3000), function(req, res){
  console.log("listening on " + (3000))
})
