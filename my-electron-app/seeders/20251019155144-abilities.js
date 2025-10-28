'use strict';

const { get_data } = require('../json_loader.js');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const json_data = get_data('/home/niko/Documents/jdr/CypherSystem/Cypher-SRD-FR/CSCG/csrd-20241001.json')
    //console.log(json_data);
    const ab_list = json_data.ab_list;
    const ab_list_toload = [];
    const ab_category_association = [];
    let ab_category_id = 0;
    for(let i=0;i<ab_list.length;i++){
      const now = new Date();
      const ab = {
        id: ab_list[i]['id'],
        createdAt: now,
        updatedAt: now,
        name: ab_list[i]['name'],
        name_en: ab_list[i]['name_en'],
        description: ab_list[i]['description'],
        stat_cost: ab_list[i]['stat_cost'],
        stat: ab_list[i]['stat'],
        cs_page: ab_list[i]['cs_page'],
        tier: ab_list[i]['tier']
      };
      ab_list_toload.push(ab);
      for(let i_categories = 0;i_categories<ab_list[i]['categories'].length;i_categories++){
        ab_category_id += 1;
        const new_association = {
          createdAt: now,
          updatedAt: now,
          AbilityId: ab_list[i]['id'],
          AbilityCategoryId: ab_list[i]['categories'][i_categories]
        };
        ab_category_association.push(new_association);
      }
    }
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkInsert('Abilities', ab_list_toload, { transaction: t }),
        queryInterface.bulkInsert('Ability_Categories', ab_category_association, { transaction: t }),
      ]);
    
    });
  },

  async down (queryInterface, Sequelize) {

    return Promise.all([
      queryInterface.bulkDelete('Abilities', null, { transaction: t }),
      queryInterface.bulkDelete('Ability_Categories', null, { transaction: t }),
    ]);
    
  }
};
