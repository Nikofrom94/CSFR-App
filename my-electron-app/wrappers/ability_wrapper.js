/* wrapper for accessing abilities in DB */

const abilitycategory = require('../models/abilitycategory.js');
const {db} = require('../models/index.js');

class AbilityView {
    static async ToJson(ability){
        return {
        id: ability.id,
        name: ability.name,
        name_en: ability.name_en,
        description: ability.description,
        tier: ability.tier,
        cs_page: ability.cs_page,
        categories: get_category_names(ability),
        }
    }
    static async get_category_names(ability){
        const names = [];;
        if(ability.hasAbilityCategories()){
            const ab_categ = ability.getAbilityCategories();
            for(let i=0;i<ab_categ.length;i++){
                names.push(ab_categ[i].name);
            }
        }
        return names;
    } 

    static async get_ability_from_id(id){
        const ability = await db['Ability'].findOne({
            where:{
                id: id
            }
        });
        return AbilityView.ToJson(ability);
    }

    static async get_ability_from_name(name){
        const ability = await db['Ability'].findOne({
            where:{
                name: name
            }
        });
        return AbilityView.ToJson(ability);
    }
}


class AbilityListView {
    static async ToJson(abilities){
        return abilities;
    }

    static async get_abilities(){
        const abilities = await db['Ability'].findAll();
        const ab_array = [];
        for(let i=0;i<abilities.length;i++){
            ab_array.push({
                id: abilities[i].id,
                name: abilities[i].name,
                name_en: abilities[i].name_en,
            });
        }
        return ab_array;
    }
}


module.exports = { 
    AbilityView,
    AbilityListView
}