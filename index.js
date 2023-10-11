var express = require('express');
var app = express();

var things = require('./question2.js');

app.use('/question2', question2);

app.listen(5000, () => {
    console.log(`Server Running in http://localhost:5000`);
});
