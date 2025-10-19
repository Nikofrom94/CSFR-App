'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Focus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models['Flavor'].belongsTo(models['Lang']);
      models['Focus'].belongsToMany(models['FocusAbilities'], { through: 'FocusAbilitiesTier1' });
      models['Focus'].belongsToMany(models['FocusAbilities'], { through: 'FocusAbilitiesTier2' });
      models['Focus'].belongsToMany(models['FocusAbilities'], { through: 'FocusAbilitiesTier3' });
      models['Focus'].belongsToMany(models['FocusAbilities'], { through: 'FocusAbilitiesTier4' });
      models['Focus'].belongsToMany(models['FocusAbilities'], { through: 'FocusAbilitiesTier5' });
      models['Focus'].belongsToMany(models['FocusAbilities'], { through: 'FocusAbilitiesTier6' });
      models['Focus'].belongsToMany(models['Character'], { through: 'CharacterFocus' });
    }
  }
  Focus.init({
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
    modelName: 'Focus',
  });
  return Focus;
};