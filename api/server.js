const express = require('express');
var mysql = require('mysql');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const users = [];

var con = mysql.createConnection({
  HOST: "23.22.199.231",
  USER: "root",
  PASSWORD: "root",
  DB: "sampledb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM sample", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  console.log(users[0].firstName)
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});