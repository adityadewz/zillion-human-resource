var express = require("express")
var path = require("path")
var app = express()
var port = process.env.PORT || 3500

switch (process.env.NODE_ENV) {

    case "production":
        app.use(express.static(__dirname + "/release"))
        console.log(process.env.NODE_ENV)
        break;

    default:
        app.use(express.static(__dirname + "/src"))
        break;
}


app.listen(port, function() {

    console.log("Listening on port: " + port)

})