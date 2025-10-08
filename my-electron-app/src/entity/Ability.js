import{sequelize} from "../datasource"
import { AbilityCategory } from "./AbilityCategory";
import {Focus} from "./Focus"
import { Character } from "./Character";
import { Lang } from "./Lang"

const Ability = sequelize.define('Ability', {
  name: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  name_en: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  stat_cost: {
    type: sequelize.DataTypes.STRING,
    allowNull: true
  },
  stat: {
    type: sequelize.DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: sequelize.DataTypes.TEXT,
    allowNull: true
  },
  cs_page: {
    type: sequelize.DataTypes.STRING,
    allowNull: true
  },
  tier: {
    type: sequelize.DataTypes.STRING,
    allowNull: true
  },
  birthday: DataTypes.DATE,
});

Ability.belongsTo(
    AbilityCategory,
    {foreignKey: 'categoryId',}
);

Ability.belongsTo(
    Lang,
    {foreignKey: 'langId',}
);


Ability.belongsToMany(Focus, { through: 'FocusAbilityTier1' });
Ability.belongsToMany(Focus, { through: 'FocusAbilityTier2' });
Ability.belongsToMany(Focus, { through: 'FocusAbilityTier3' });
Ability.belongsToMany(Focus, { through: 'FocusAbilityTier4' });
Ability.belongsToMany(Focus, { through: 'FocusAbilityTier5' });
Ability.belongsToMany(Focus, { through: 'FocusAbilityTier6' });

Ability.belongsToMany(Character, { through: 'CharacterAbility' });