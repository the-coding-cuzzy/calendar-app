'use strict';
import 'babel-polyfill';
import express from 'express';
import path from 'path';

const port = 3000;
const app = express();

// app.use('/', Express.static('public'));
app.use('/', express.static('public'));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// app.use(express.static(__dirname + '/views/')); //serves the index.html

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/views/', 'index.html'));
// });


app.listen(port, function (error) {
    if(error) {
        console.log(error);
    }
});