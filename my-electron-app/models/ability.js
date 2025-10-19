'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models['Ability'].belongsToMany( models['AbilityCategory'], {through: 'Ability_Categories'});
      models['Ability'].belongsTo(models['Lang'] );
      models['Ability'].belongsToMany(models['Flavor'], { through: 'FlavorAbilityTier1' });
      models['Ability'].belongsToMany(models['Flavor'], { through: 'FlavorAbilityTier2' });
      models['Ability'].belongsToMany(models['Flavor'], { through: 'FlavorAbilityTier3' });
      models['Ability'].belongsToMany(models['Flavor'], { through: 'FlavorAbilityTier4' });
      models['Ability'].belongsToMany(models['Flavor'], { through: 'FlavorAbilityTier5' });
      models['Ability'].belongsToMany(models['Flavor'], { through: 'FlavorAbilityTier6' });
      models['Ability'].belongsToMany(models['FocusAbilities'], { through: 'FocusAbilitiesToGet' });
      models['Ability'].belongsToMany(models['FocusAbilities'], { through: 'FocusAbilitiesToChoose' });
      models['Ability'].belongsToMany(models['Character'], { through: 'CharacterAbilities' });
      models['Ability'].belongsToMany(models['CharacterType'], { through: 'charactertypeabilities_tier1' });
      models['Ability'].belongsToMany(models['CharacterType'], { through: 'charactertypeabilities_tier2' });
      models['Ability'].belongsToMany(models['CharacterType'], { through: 'charactertypeabilities_tier3' });
      models['Ability'].belongsToMany(models['CharacterType'], { through: 'charactertypeabilities_tier4' });
      models['Ability'].belongsToMany(models['CharacterType'], { through: 'charactertypeabilities_tier5' });
      models['Ability'].belongsToMany(models['CharacterType'], { through: 'charactertypeabilities_tier6' });    
    }
  }
  Ability.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name_en: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stat_cost: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cs_page: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birthday: DataTypes.DATE,
  }, {
    sequelize,
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