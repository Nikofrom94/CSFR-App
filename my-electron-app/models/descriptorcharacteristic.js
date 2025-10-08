'use strict';
const {
  Model
} = require('sequelize');

import { Descriptor } from "./descriptor";

module.exports = (sequelize, DataTypes) => {
  class DescriptorCharacteristic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DescriptorCharacteristic.belongTo(Descriptor);
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