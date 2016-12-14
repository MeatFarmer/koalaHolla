var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser= require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( {extended: false } );
var port = process.env.PORT || 8080;
var pg = require ('pg');
var connectionString = 'postgres://localhost:5432/KOALAHOLLA';
// static folder
app.use( express.static( 'public' ) );

// spin up server
app.listen( port, function(){
  console.log( 'server up on', port );
});

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( 'index.html' );
});

// get koalas
app.get( '/getKoalas', function( req, res ){
  console.log( 'getKoalas route hit' );
  //assemble object to send
  var objectToSend={
    response: 'from getKoalas route'
  }; //end objectToSend
  //send info back to client
  res.send( objectToSend );
});

// add koala
app.post( '/addKoala', urlencodedParser, function( req, res ){
  console.log( 'addKoala route hit' );
  //assemble object to send
  var objectToSend={
    response: 'from addKoala route'
  }; //end objectToSend
  //send info back to client
  pg.connect(connectionString, function(err, client, done){
    if (err){
        console.log(err);
    }
    else {
      client.query ('INSERT INTO koala(name, sex, age, ready_for_transfer, notes) values ($1, $2, $3, $4, $5)', [ req.body.name, req.body.sex, req.body.age, req.body.ready_for_transfer, req.body.notes] );
      res.send( objectToSend );
    }
  }); // in pg connect connectionString
});

// add koala
app.post( '/editKoala', urlencodedParser, function( req, res ){
  console.log( 'editKoala route hit' );
  //assemble object to send
  var objectToSend={
    response: 'from editKoala route'
  }; //end objectToSend
  //send info back to client
  res.send( objectToSend );
});
