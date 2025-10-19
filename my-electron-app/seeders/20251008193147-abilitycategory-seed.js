// import CS data for AbilityCategory

'use strict';

const { get_data } = require('../json_loader.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up (queryInterface, Sequelize) {
    const json_data = get_data('/home/niko/Documents/jdr/CypherSystem/Cypher-SRD-FR/CSCG/csrd-20241001.json')
    //console.log(json_data);
    const ab_categ_list = json_data.ab_categ_list;
    for(let i=0;i<ab_categ_list.length;i++){
      const now = new Date();
      ab_categ_list[i]['createdAt'] = now;
      ab_categ_list[i]['updatedAt'] = now;
    }
    //const cscg_json = require( __dirname + "/../../../../Documents/jdr/CypherSystem/Cypher-SRD-FR/CSCG/csrd-20241001.json" )

    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkInsert('AbilityCategories', ab_categ_list, { transaction: t }),
      ]);
    
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('AbilityCategories', null, {});
  }
};
