const express = require("express")
require("dotenv").config()
const routes = require('./app/routes');
const db = require('./app/models');
const port = process.env.Port
const app = express()
app.use(express.json());//for accept body data in controller
app.use(express.urlencoded({ extended: true }));// send data as a json
app.use('/api', routes);
db.sequelize.sync({ alter: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

