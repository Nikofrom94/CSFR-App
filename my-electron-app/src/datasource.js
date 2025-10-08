const { Sequelize } = require("sequelize");

import(Sequelize)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/database_development'
  });
