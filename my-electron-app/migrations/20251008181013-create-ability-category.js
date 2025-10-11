'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AbilityCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      name_en: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      cs_page: {
        type: Sequelize.STRING
      },
    });
    await queryInterface.addIndex('AbilityCategories', {
      name: 'ab_categ_name',
      fields: ['name'],
      unique: true,
    });
    await queryInterface.addIndex('AbilityCategories', {
      name: 'ab_categ_name_en',
      fields: ['name_en'],
      unique: true,
    });
    await queryInterface.addIndex('AbilityCategories', {
      name: 'ab_categ_description',
      fields: ['description'],
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AbilityCategories');
  }
};