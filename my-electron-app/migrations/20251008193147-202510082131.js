'use strict';

const cscg_json = require( "/home/niko/Documents/jdr/CypherSystem/Cypher-SRD-FR/CSCG/csrd-20241001.json" )
let ab_categ_list = [];
for (let i = 0; i < cscg_json.length; i++) {
  const cscg_model = cscg_json[i];
  if(cscg_model.model == "cscg.abilitycategory"){
    ab_categ_list.push({
       name: cscg_model.fields.name,
       name_en: cscg_model.fields.name_en,
       description: cscg_model.fields.description,
       cs_page: cscg_model.fields.cs_page,
      });

  }
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('AbilityCategories', ab_categ_list);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
