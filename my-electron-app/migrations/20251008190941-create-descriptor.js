'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Descriptors', {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex('Descriptors', {
      name: 'desc_name',
      fields: ['name'],
      unique: true,
    });
    await queryInterface.addIndex('Descriptors', {
      name:'desc_name_en',
      fields: ['name_en'],
      unique: true,
    });
    await queryInterface.addIndex('Descriptors', {
      name:'desc_description',
      fields: ['description'],
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Descriptors');
  }
};