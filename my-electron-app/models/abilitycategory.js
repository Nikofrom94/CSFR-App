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
      Ability.belongsTo(
        Lang,
        {foreignKey: 'langId',}
    );
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
    indexes:[
      {
        name: 'ab_categ_name_index',
        unique: true,
        fields: ['name']
      },
      {
        name: 'ab_categ_name_en_index',
        fields: ['name_en']
      },
      {
        name: 'ab_categ_description_index',
        fields: ['description']
      },
    ]
  });
  return AbilityCategory;
};