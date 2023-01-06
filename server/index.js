const express = require('express')
const app = express()
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000
const connectDB = require('./config/db');
const models = require('./models')

connectDB()

 // CRUD
app.use('/api/admin', require('./controllers/crud')(models.Admin));
app.listen( port, console.log(`port ${port} runinig`))