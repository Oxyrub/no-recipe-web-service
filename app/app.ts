import express from "express";

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});