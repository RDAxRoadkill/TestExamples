var express = require("express");
var bodyParser = require("body-parser");
var router = require('./router')
var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const router = require("./router");
app.use(router);

app.listen(process.env.PORT || 5000, () => {
  if(!module.parent){ app.listen(port); }
  if (process.env.PORT !== undefined) {
    console.log("Server gestart op poort " + process.env.PORT);
  } else {
    console.log("Server gestart op poort 5000");
  }
});

module.exports = app;