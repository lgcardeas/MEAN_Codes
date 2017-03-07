var express = require('express'); //Include express to our system

var app = express();    // get a reference to express

var port = '8000';  // Assign the port we are going to use

//app.use(body-parser()); //Each time we navigating to ('index') specified in app.get... it's going to run body-parser and cokieParser.. Does mean that whatever we are specifying using 'use' this is going to run
//app.use(cookieParser());

app.get('/', log, hello);

function log(req, res, next){
    console.log(new Date, req.method, req.url); //This is going to print in the console the Date, the method that we used('POST/GET') and the url that we navigate to.
    next(); //move on to the next function in our middleware-chain
}

function hello(req, res, next){
    res.write("Hello World\n");
    res.end();
    next();  //move on to the next function in our middleware-chain
}

app.listen(port, function(err, res){  // Start the server listening to the port 8000
    if (err){
        console.log("An error has occurred");
    } else {
        console.log("Server started");
    }
});