'use strict';
// import CS data for AbilityCategory


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const cscg_json = require( __dirname + "/../../../../Documents/jdr/CypherSystem/Cypher-SRD-FR/CSCG/csrd-20241001.json" )
    let ab_list = [];
    const names = new Set();
    const names_en = new Set();
    for (let i = 0; i < cscg_json.length; i++) {
      const cscg_model = cscg_json[i];
      if(cscg_model.model == "cscg.focus"){
        let skip = false;
        if(!names.has(cscg_model.fields.name)){
          names.add(cscg_model.fields.name)
        }else{
          console.log(cscg_model.fields.name + ' exists : skip');
          skip = true;
        }
        if(!names_en.has(cscg_model.fields.name_en)){
          names_en.add(cscg_model.fields.name_en)
        }else{
          console.log(cscg_model.fields.name_en + ' exists : skip');
          skip = true;
        }
        if(!skip){
          ab_list.push({
            name: cscg_model.fields.name,
            name_en: cscg_model.fields.name_en,
            stat:  cscg_model.fields.stat,
            stat_cost:  cscg_model.fields.stat_cost,
            tier:  cscg_model.fields.tier,
            description: cscg_model.fields.description,
            cs_page: cscg_model.fields.cs_page,
            });
        }
        
      }
    }
    return queryInterface.bulkInsert('Abilities', ab_list);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Abilities', null, {});
  }
};
