'use strict';
const {
  Model
} = require('sequelize');

import {Ability} from "./ability";

module.exports = (sequelize, DataTypes) => {
  class Focus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Focus.belongsToMany(FocusAbilities, { through: 'FocusAbilitiesTier1' });
      Focus.belongsToMany(FocusAbilities, { through: 'FocusAbilitiesTier2' });
      Focus.belongsToMany(FocusAbilities, { through: 'FocusAbilitiesTier3' });
      Focus.belongsToMany(FocusAbilities, { through: 'FocusAbilitiesTier4' });
      Focus.belongsToMany(FocusAbilities, { through: 'FocusAbilitiesTier5' });
      Focus.belongsToMany(FocusAbilities, { through: 'FocusAbilitiesTier6' });
      Focus.belongsToMany(Character, { through: 'CharacterFocus' });
    }
  }
  Focus.init({
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false
    },
    name_en: {
      type: sequelize.DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: sequelize.DataTypes.TEXT,
      allowNull: true
    },
    cs_page: {
      type: sequelize.DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Focus',
  });
  return Focus;
};