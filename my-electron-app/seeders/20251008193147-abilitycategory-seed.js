// import CS data for AbilityCategory

'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up (queryInterface, Sequelize) {
    const cscg_json = require( __dirname + "/../../../../Documents/jdr/CypherSystem/Cypher-SRD-FR/CSCG/csrd-20241001.json" )
    let ab_categ_list = [];
    const names = new Set();
    const names_en = new Set();
    for (let i = 0; i < cscg_json.length; i++) {
      const cscg_model = cscg_json[i];
      if(cscg_model.model == "cscg.abilitycategory"){
        let skip = false;
        try{
          names.add(cscg_model.fields.name)
        }catch{
          console.log(cscg_model.fields.name + ' exists : skip');
          skip = true;
        }
        try{
          names_en.add(cscg_model.fields.name_en)
        }catch{
          console.log(cscg_model.fields.name_en + ' exists : skip');
          skip = true;
        }
        if(skip==false){
          ab_categ_list.push({
            name: cscg_model.fields.name,
            name_en: cscg_model.fields.name_en,
            description: cscg_model.fields.description,
            cs_page: cscg_model.fields.cs_page,
            });
        }
        

      }
    }
    return queryInterface.bulkInsert('AbilityCategories', ab_categ_list);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('AbilityCategories', null, {});
  }
};
