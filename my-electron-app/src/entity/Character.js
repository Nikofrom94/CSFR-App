import{sequelize} from "../datasource"
import { Ability } from "./Ability"
import { Descriptor } from "./Descriptor"
import { Focus } from "./Focus"
import { Flavor } from "./Flavor"
import { Skill } from "./Skill"
import { CharacterSkill } from "./CharacterSkill"

const Character = sequelize.define('Character', {
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
});
Character.belongsToMany(Ability, { through: 'CharacterAbility' });
Character.belongsTo(Flavor);
Character.belongsTo(Focus);
Character.belongsTo(Descriptor, { through: 'Descriptor' });
Character.hasMany(CharacterSkill);
