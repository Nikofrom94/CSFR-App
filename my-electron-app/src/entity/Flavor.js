import{sequelize} from "../datasource"
import { Ability } from "./Ability"
import { Character } from "./Character"

const Flavor = sequelize.define('Flavor', {
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
Flavor.belongsToMany(Ability, { through: 'FlavorAbilityTier1' });
Flavor.belongsToMany(Ability, { through: 'FlavorAbilityTier2' });
Flavor.belongsToMany(Ability, { through: 'FlavorAbilityTier3' });
Flavor.belongsToMany(Ability, { through: 'FlavorAbilityTier4' });
Flavor.belongsToMany(Ability, { through: 'FlavorAbilityTier5' });
Flavor.belongsToMany(Ability, { through: 'FlavorAbilityTier6' });
Flavor.belongsToMany(Character, { through: 'CharacterFlavor' });
