import{sequelize} from "../datasource"
import { Descriptor } from "./Descriptor";


const DescriptorCharacteristic = sequelize.define('DescriptorCharacteristic', {
  name: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  name_en: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
});

DescriptorCharacteristic.belongTo(Descriptor);
