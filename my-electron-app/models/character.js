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
        models['Character'].belongsTo(models['CharacterType']);
        models['Character'].belongsToMany(models['Ability'], { through: 'CharacterAbilities' });
        models['Character'].belongsToMany(models['Flavor'], { through: 'CharacterFlavor' });
        models['Character'].belongsToMany(models['Focus'], { through: 'CharacterFocus' });
    }
  }
  Character.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tier: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 6,
        }
    },
    might: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 30,
        }
    },
    speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 30,
        }
    },
    intellect: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 8,
        }
    },
    might_edge: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 8,
        }
    },
    speed_edge: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 8,
        }
    },
    intellect_edge: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 8,
        }
    },
    max_cyphers: {
        type: DataTypes.INTEGER,
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