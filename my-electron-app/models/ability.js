'use strict';
const {
  Model
} = require('sequelize');

import { Focus } from "./focus";
import  {CharacterType } from "./charactertype";

module.exports = (sequelize, DataTypes) => {
  class Ability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ability.belongsTo(
        AbilityCategory,
          {foreignKey: 'categoryId',}
      );
      
      Ability.belongsTo(
          Lang,
          {foreignKey: 'langId',}
      );
      Ability.belongsToMany(FocusAbilities, { through: 'FocusAbilities' });
      Ability.belongsToMany(FocusAbilities, { through: 'FocusAbilitiesToChoose' });
      Ability.belongsToMany(Character, { through: 'CharacterAbility' });
      Ability.belongsToMany(CharacterType, { through: 'charactertypeabilities_tier1' });
      Ability.belongsToMany(CharacterType, { through: 'charactertypeabilities_tier2' });
      Ability.belongsToMany(CharacterType, { through: 'charactertypeabilities_tier3' });
      Ability.belongsToMany(CharacterType, { through: 'charactertypeabilities_tier4' });
      Ability.belongsToMany(CharacterType, { through: 'charactertypeabilities_tier5' });
      Ability.belongsToMany(CharacterType, { through: 'charactertypeabilities_tier6' });    
    }
  }
  Ability.init({
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false
    },
    name_en: {
      type: sequelize.DataTypes.STRING,
      allowNull: false
    },
    stat_cost: {
      type: sequelize.DataTypes.STRING,
      allowNull: true
    },
    stat: {
      type: sequelize.DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: sequelize.DataTypes.TEXT,
      allowNull: true
    },
    cs_page: {
      type: sequelize.DataTypes.STRING,
      allowNull: true
    },
    tier: {
      type: sequelize.DataTypes.STRING,
      allowNull: true
    },
    birthday: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Ability',
    indexes:[
      {
        unique: true,
        fields: ['name'],
        name:"ab_name_index"
      },
      {
        fields: ['description'],
        name:"ab_description_index"
      },
      {
        fields: ['tier'],
        name:"ab_tier_index"
      },
    ],
  });
  return Ability;
};