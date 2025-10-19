'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Lang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models['Lang'].hasMany(models['Ability']);
      models['Lang'].hasMany(models['AbilityCategory']);
      models['Lang'].hasMany(models['CharacterType']);
      models['Lang'].hasMany(models['Descriptor']);
      models['Lang'].hasMany(models['Flavor']);
      models['Lang'].hasMany(models['Focus']);
    }
  }
  Lang.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lang',
  });
  return Lang;
};