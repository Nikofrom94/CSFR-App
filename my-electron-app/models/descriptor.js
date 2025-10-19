'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Descriptor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models['Descriptor'].hasMany(models['Lang']);
      models['Descriptor'].hasMany(models['InitialLink']);
      models['Descriptor'].hasMany(models['DescriptorCharacteristic']);
      }
  }
  Descriptor.init({
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
    might_modifier:{
        type: DataTypes.INTEGER,
        default: 0
    },
    speed_modifier:{
        type: DataTypes.INTEGER,
        default: 0
    },
    intellect_modifier:{
        type: DataTypes.INTEGER,
        default: 0
    },
  }, {
    sequelize,
    modelName: 'Descriptor',
    indexes:[
      {
        unique: true,
        fields: ['name'],
        name:"desc_name_index"
      },
      {
        fields: ['name_en'],
        name:"desc_name_en_index"
      },
      {
        fields: ['description'],
        name:"desc_description_index"
      },
    ],
  });
  return Descriptor;
};