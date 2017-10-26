const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res){
  res.send([
    {name: "Harry Potter", age: 29},
    {name: "John Doe", age: 30},
    {name: "Brian Finch", age: 28},
    {name: "Xue Xang", age: 29}
  ]);
});

app.listen(3001, function(){
  console.log("Server Started at port: " + 3001);
});
