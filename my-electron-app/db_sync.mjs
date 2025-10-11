import { Sequelize } from 'sequelize';

export async function db_initialize(){

    //const { Sequelize } = require('sequelize');
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './database.sqlite'
    });
    //await sequelize.drop();
    //console.log('All tables dropped!');
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');
  
}
