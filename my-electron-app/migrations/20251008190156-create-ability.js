'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Abilities', {
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
        type: Sequelize.TEXT,
        allowNull: true,
      },
      cs_page: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      stat: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      stat_cost: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tier: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
    await queryInterface.addIndex('Abilities', {
        name: 'ab_name',
        fields: ['name'],
        unique: true,
      });
      await queryInterface.addIndex('Abilities', {
        name:'ab_name_en',
        fields: ['name_en'],
        unique: true,
      });
      await queryInterface.addIndex('Abilities', {
        name: 'ab_tier',
        fields: ['tier'],
      });
      await queryInterface.addIndex('Abilities', {
        name:'ab_description',
        fields: ['description'],
      });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Abilities');
  }
};