import{sequelize} from "../datasource"
import { Character } from "./Character";

const Cypher = sequelize.define('Cypher', {
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false
    },
    name_en: {
      type: sequelize.DataTypes.STRING,
      allowNull: false
    },
    hint: {
      type: sequelize.DataTypes.STRING,
      allowNull: true
    },
    effect: {
      type: sequelize.DataTypes.TEXT,
      allowNull: true
    },
    cs_page: {
      type: sequelize.DataTypes.TEXT,
      allowNull: true
    },
    level: {
      type: sequelize.DataTypes.TEXT,
      allowNull: true
    },
    is_manifest: {
      type: sequelize.DataTypes.BOOLEAN,
      default: false
    },
    is_subtle: {
      type: sequelize.DataTypes.BOOLEAN,
      default: false
    },
    is_fantastic: {
      type: sequelize.DataTypes.BOOLEAN,
      default: false
    },
});

CharacterSkill.belongsTo(Character);

