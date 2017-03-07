var express = require('express'); //We must specify that we going to need 'express' in our system

var app = express();    //Assign to app an express instance or reference (?)

var port  = 8000;     // Set up the port we going to use

app.listen(port, function(err, res){ //Start listening by the port we specified
    if (err){
        console.log("An error has occurred");
    } else {
        console.log("server started"); 
    }
}); 

