'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Character.init({
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false
    },
    tier: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 6,
        }
    },
    might: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 30,
        }
    },
    speed: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 30,
        }
    },
    intellect: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 8,
        }
    },
    might_edge: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 8,
        }
    },
    speed_edge: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 8,
        }
    },
    intellect_edge: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 8,
        }
    },
    max_cyphers: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 2,
        validate: {
            min: 1,
            max: 10,
        }
    },
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};