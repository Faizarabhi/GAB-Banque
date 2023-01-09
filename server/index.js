const express = require('express')
const app = express()
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000
const connectDB = require('./config/db');
const models = require('./models')
var cors = require('cors')
const bodyParser = require('body-parser');


connectDB()

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//errorHandler

 // CRUD
app.use('/api/Admin',require('./controllers')(models.Admin));
app.use('/api/User', require('./controllers')(models.User));
app.use('/api/Account', require('./controllers')(models.Account));
app.listen( port, console.log(`port ${port} runinig`))