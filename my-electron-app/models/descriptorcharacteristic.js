'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class DescriptorCharacteristic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models['DescriptorCharacteristic'].belongsTo(models['Descriptor']);
    }
  }
  DescriptorCharacteristic.init({
    name: DataTypes.STRING,
    name_en: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DescriptorCharacteristic',
  });
  return DescriptorCharacteristic;
};