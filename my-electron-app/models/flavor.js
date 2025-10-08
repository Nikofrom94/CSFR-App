'use strict';
const {
  Model
} = require('sequelize');

import { Ability} from "./ability";
import { Character } from "./character";

module.exports = (sequelize, DataTypes) => {
  class Flavor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flavor.belongsToMany(Ability, { through: 'FlavorAbilityTier1' });
      Flavor.belongsToMany(Ability, { through: 'FlavorAbilityTier2' });
      Flavor.belongsToMany(Ability, { through: 'FlavorAbilityTier3' });
      Flavor.belongsToMany(Ability, { through: 'FlavorAbilityTier4' });
      Flavor.belongsToMany(Ability, { through: 'FlavorAbilityTier5' });
      Flavor.belongsToMany(Ability, { through: 'FlavorAbilityTier6' });
      Flavor.belongsToMany(Character, { through: 'CharacterFlavor' });
    }
  }
  Flavor.init({
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
    modelName: 'Flavor',
  });
  return Flavor;
};