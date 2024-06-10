const Sequelize = require('sequelize');
const sequelize = require('../utils/database/db.config');
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Import models

// db.UserAuth = require('../website/userAuth/models/userAuth')(sequelize, Sequelize);
db.userAuth = require('../website/userauth/models/userAuthModels')(sequelize, Sequelize);

module.exports = db;
