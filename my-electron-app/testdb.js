const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.developement'
});
sequelize.sync({ force: true });
console.log('All models were synchronized successfully.');
