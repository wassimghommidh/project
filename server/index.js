const express = require("express");
const app = express();
const itemRoutes = require('./routes/item.routes')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/public"));

app.use('/api',itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
