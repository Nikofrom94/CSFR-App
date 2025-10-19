'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FocusAbilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models['FocusAbilities'].belongsToMany(models['Ability'], { through: 'FocusAbilitiesToGet' });
      models['FocusAbilities'].belongsToMany(models['Ability'], { through: 'FocusAbilitiesToChoose' });
      models['FocusAbilities'].belongsToMany(models['Focus'], { through: 'FocusAbilitiesTier1' });
      models['FocusAbilities'].belongsToMany(models['Focus'], { through: 'FocusAbilitiesTier2' });
      models['FocusAbilities'].belongsToMany(models['Focus'], { through: 'FocusAbilitiesTier3' });
      models['FocusAbilities'].belongsToMany(models['Focus'], { through: 'FocusAbilitiesTier4' });
      models['FocusAbilities'].belongsToMany(models['Focus'], { through: 'FocusAbilitiesTier5' });
      models['FocusAbilities'].belongsToMany(models['Focus'], { through: 'FocusAbilitiesTier6' });

    }
  }
  FocusAbilities.init({
   
  }, {
    sequelize,
    modelName: 'FocusAbilities',
  });
  return FocusAbilities;
};