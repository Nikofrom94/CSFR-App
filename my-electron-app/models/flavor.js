'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Flavor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models['Flavor'].belongsTo(models['Lang'] );
      models['Flavor'].belongsToMany(models['Ability'], 
        { 
          through: 'FlavorAbilityTier1',
          as: 'abilities_tier1'
        });
      models['Flavor'].belongsToMany(models['Ability'], 
        {
          through: 'FlavorAbilityTier2',
          as: 'abilities_tier2'
        });
      models['Flavor'].belongsToMany(models['Ability'], 
        { 
          through: 'FlavorAbilityTier3',
          as: 'abilities_tier3'
        });
      models['Flavor'].belongsToMany(models['Ability'], 
        { 
          through: 'FlavorAbilityTier4',
          as: 'abilities_tier4'
        });
      models['Flavor'].belongsToMany(models['Ability'], 
        { 
          through: 'FlavorAbilityTier5',
          as: 'abilities_tier5'
        });
      models['Flavor'].belongsToMany(models['Ability'], 
        { 
          through: 'FlavorAbilityTier6',
          as: 'abilities_tier6'
        });
      models['Flavor'].belongsToMany(models['Character'], 
        { 
          through: 'CharacterFlavor',
          as: 'characters'
        });
    }
  }
  Flavor.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name_en: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cs_page: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Flavor',
  });
  return Flavor;
};