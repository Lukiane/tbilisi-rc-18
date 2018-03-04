

const express = require("express");
const app = express();

// Static css/js files
app.use(express.static('../html'));

app.get("/", function(req, res) {
    res.sendFile('../html/index.html');
});


const port = 3001;

// Start server
app.listen(port, function() {
    console.log("Listening on " + port);
});