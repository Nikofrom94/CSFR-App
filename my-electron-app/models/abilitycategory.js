'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AbilityCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AbilityCategory.init({
    name: DataTypes.STRING,
    name_en: DataTypes.STRING,
    description: DataTypes.TEXT,
    cs_page: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AbilityCategory',
  });
  return AbilityCategory;
};