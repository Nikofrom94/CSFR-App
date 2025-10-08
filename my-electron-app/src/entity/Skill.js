import{sequelize} from "../datasource"
import { Character } from "./Character";

const Skill = sequelize.define('Skill', {
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false
    },
    name_en: {
      type: sequelize.DataTypes.STRING,
      allowNull: false
    },
    stat: {
      type: sequelize.DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: sequelize.DataTypes.TEXT,
      allowNull: true
    },
});

Skill.belongsToMany(Character, { through: 'CharacterSkill' });