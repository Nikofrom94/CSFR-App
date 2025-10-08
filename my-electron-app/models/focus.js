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
      Focus.belongsToMany(Ability, { through: 'FocusAbilityTier1' });
      Focus.belongsToMany(Ability, { through: 'FocusAbilityTier2' });
      Focus.belongsToMany(Ability, { through: 'FocusAbilityTier3' });
      Focus.belongsToMany(Ability, { through: 'FocusAbilityTier4' });
      Focus.belongsToMany(Ability, { through: 'FocusAbilityTier5' });
      Focus.belongsToMany(Ability, { through: 'FocusAbilityTier6' });
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