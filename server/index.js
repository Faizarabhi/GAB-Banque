const express = require('express')
const app = express()
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000
const connectDB = require('./config/db');
const models = require('./models')
var cors = require('cors')
const bodyParser = require('body-parser');

connectDB()
// console.log('rr')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors())


 // CRUD
app.use('/api/Admin',require('./controllers/crud')(models.Admin));
app.use('/api/User', require('./controllers/crud')(models.User));
app.use('/api/Account', require('./controllers/crud')(models.Account));
app.listen( port, console.log(`port ${port} runinig`))