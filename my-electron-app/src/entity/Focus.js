import{sequelize} from "../datasource"
import { Ability } from "./Ability"
import { Character } from "./Character"
import { AbilityCategory } from "./AbilityCategory";

const Focus = sequelize.define('Focus', {
  name: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  name_en: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: sequelize.DataTypes.TEXT,
    allowNull: true
  },
  cs_page: {
    type: sequelize.DataTypes.STRING,
    allowNull: true
  },
});
Focus.belongsToMany(Ability, { through: 'FocusAbilityTier1' });
Focus.belongsToMany(Ability, { through: 'FocusAbilityTier2' });
Focus.belongsToMany(Ability, { through: 'FocusAbilityTier3' });
Focus.belongsToMany(Ability, { through: 'FocusAbilityTier4' });
Focus.belongsToMany(Ability, { through: 'FocusAbilityTier5' });
Focus.belongsToMany(Ability, { through: 'FocusAbilityTier6' });
Focus.belongsToMany(Character, { through: 'CharacterFocus' });
