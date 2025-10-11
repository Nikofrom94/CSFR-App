'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
      await queryInterface.removeIndex('Abilities','ab_name_en');
      await queryInterface.addIndex('Abilities', {
        name:'ab_name_en',
        fields: ['name_en'],
      });
      await queryInterface.removeIndex('Focus','ab_name_en');
      await queryInterface.addIndex('Focus', {
        name:'ab_name_en',
        fields: ['name_en'],
      });
      await queryInterface.removeIndex('Descriptors','ab_name_en');
      await queryInterface.addIndex('Descriptors', {
        name:'ab_name_en',
        fields: ['name_en'],
      });
      await queryInterface.removeIndex('Flavors','ab_name_en');
      await queryInterface.addIndex('Flavors', {
        name:'ab_name_en',
        fields: ['name_en'],
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('Abilities','ab_name_en');
    await queryInterface.removeIndex('Focus','ab_name_en');
    await queryInterface.removeIndex('Descriptors','ab_name_en');
    await queryInterface.removeIndex('Flavors','ab_name_en');
  }
};