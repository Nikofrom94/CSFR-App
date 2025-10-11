'use strict';
import {Ability} from "./ability";

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CharacterType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        CharacterType.belongsToMany(Ability, { through: 'charactertypeabilities_tier1' });
        CharacterType.belongsToMany(Ability, { through: 'charactertypeabilities_tier2' });
        CharacterType.belongsToMany(Ability, { through: 'charactertypeabilities_tier3' });
        CharacterType.belongsToMany(Ability, { through: 'charactertypeabilities_tier4' });
        CharacterType.belongsToMany(Ability, { through: 'charactertypeabilities_tier5' });
        CharacterType.belongsToMany(Ability, { through: 'charactertypeabilities_tier6' });    
      }
  }
  CharacterType.init({
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false
    },
    name_en: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
      },
    might_start: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 30,
        }
    },
    speed_start: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 30,
        }
    },
    intellect_start: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 8,
        }
    },
    might_edge_start: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 8,
        }
    },
    speed_edge_start: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 8,
        }
    },
    intellect_edge_start: {
        type: sequelize.DataTypes.NUMBER,
        allowNull: false,
        default: 1,
        validate: {
            min: 1,
            max: 8,
        }
    },
    cyphers_start: {
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
    modelName: 'CharacterType',
    indexes:[
        {
            name: "charactertype_name_index",
            fields: ["name"],
            unique: true,
        },
        {
            name: "charactertype_name_en_index",
            fields: ["name_en"],
        },
    ],
  });
  return CharacterType;
};