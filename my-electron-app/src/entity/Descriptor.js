
import{sequelize} from "../datasource"
import { Ability } from "./Ability"

import { DescriptorCharacteristic } from "./DescriptorCharacteristic"
import { InitialLink } from "./InitialLink"

const Descriptor = sequelize.define('Descriptor', {
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
    might_modifier:{
        type: sequelize.DataTypes.NUMBER,
        default: 0
    },
    speed_modifier:{
        type: sequelize.DataTypes.NUMBER,
        default: 0
    },
    intellect_modifier:{
        type: sequelize.DataTypes.NUMBER,
        default: 0
    },
});

Descriptor.hasMany(
    InitialLink
);

Descriptor.hasMany(
    DescriptorCharacteristic
);