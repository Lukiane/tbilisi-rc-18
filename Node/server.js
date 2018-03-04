

const express = require("express");
const app = express();

// Static css/js files
app.use(express.static('/Users/lukakobalia/Desktop/Tbilisi Regional Conference 2018/TbilisiRC18/html'));

app.get("/", function(req, res) {
    res.sendFile('/Users/lukakobalia/Desktop/Tbilisi Regional Conference 2018/TbilisiRC18/html/index.html');
});


const port = 3001;

// Start server
app.listen(port, function() {
    console.log("Listening on " + port);
});