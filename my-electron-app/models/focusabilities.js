'use strict';
const {
  Model
} = require('sequelize');

import {Ability} from "./ability";
import{Focus} from "./focus"

module.exports = (sequelize, DataTypes) => {
  class FocusAbilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FocusAbilities.belongsToMany(Focus, { through: 'FocusAbilities' });
      FocusAbilities.belongsToMany(Focus, { through: 'FocusAbilitiesToChoose' });
    }
  }
  FocusAbilities.init({
   
  }, {
    sequelize,
    modelName: 'FocusAbilities',
  });
  return FocusAbilities;
};