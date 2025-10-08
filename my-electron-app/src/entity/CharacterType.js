import{sequelize} from "../datasource"
import { Character } from "./Character"
import { Ability } from "./Ability"

const CharacterType = sequelize.define('CharacterType', {
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false
    },
    might_start: {
      type: sequelize.DataTypes.NUMBER,
      default: 8,
    },
    speed_start: {
        type: sequelize.DataTypes.NUMBER,
        default: 8,
      },
    intellect_start: {
        type: sequelize.DataTypes.NUMBER,
        default: 8,
      },
    might_edge_start: {
    type: sequelize.DataTypes.NUMBER,
    default: 0,
    },
    speed_edge_start: {
        type: sequelize.DataTypes.NUMBER,
        default: 0,
    },
    intellect_edge_start: {
        type: sequelize.DataTypes.NUMBER,
        default: 0,
    },
    cyphers_start: {
        type: sequelize.DataTypes.NUMBER,
        default: 2,
        validate: {
            min: 2,
            max: 3,
        }
    },
});
CharacterType.belongsToMany(Ability, { through: 'CharacterTypeAbilityTier1' });
CharacterType.belongsToMany(Ability, { through: 'CharacterTypeAbilityTier2' });
CharacterType.belongsToMany(Ability, { through: 'CharacterTypeAbilityTier3' });
CharacterType.belongsToMany(Ability, { through: 'CharacterTypeAbilityTier4' });
CharacterType.belongsToMany(Ability, { through: 'CharacterTypeAbilityTier5' });
CharacterType.belongsToMany(Ability, { through: 'CharacterTypeAbilityTier6' });
