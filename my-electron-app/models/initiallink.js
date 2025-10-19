'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class InitialLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models['InitialLink'].belongsTo( models['Descriptor']);
    }
  }
  InitialLink.init({
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'InitialLink',
  });
  return InitialLink;
};