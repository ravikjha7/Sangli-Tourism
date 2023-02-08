const express = require('express');
require("dotenv").config();
const connectDB = require("./config/db");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admins');

app.use(bodyParser.json({ limit: "30mb", extended: true })); 
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    origin: true
  }

app.use(cors(corsOptions));

connectDB();

app.use('/admin', adminRoutes);
app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`);
});