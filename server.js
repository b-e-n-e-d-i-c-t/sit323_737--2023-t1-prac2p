const { Console } = require('console');
var express = require('express');
app = express();

const portNum = 3000

app.get('/',(req, res) => {
    console.log("Hello Console!")
    res.send("Response from the server")
})

app.listen(portNum, () =>{
    console.log(`The application is listening on port: ${portNum}`)
})
