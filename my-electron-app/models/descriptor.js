'use strict';
const {
  Model
} = require('sequelize');

import { InitialLink } from "./initiallink";
import { DescriptorCharacteristic } from "./descriptorcharacteristic";

module.exports = (sequelize, DataTypes) => {
  class Descriptor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Descriptor.hasMany(
        InitialLink
      );
      
      Descriptor.hasMany(
          DescriptorCharacteristic
      );
      }
  }
  Descriptor.init({
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
    might_modifier:{
        type: sequelize.DataTypes.NUMBER,
        default: 0
    },
    speed_modifier:{
        type: sequelize.DataTypes.NUMBER,
        default: 0
    },
    intellect_modifier:{
        type: sequelize.DataTypes.NUMBER,
        default: 0
    },
  }, {
    sequelize,
    modelName: 'Descriptor',
  });
  return Descriptor;
};