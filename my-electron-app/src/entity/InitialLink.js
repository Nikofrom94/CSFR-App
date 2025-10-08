import{sequelize} from "../datasource"
import { Descriptor } from "./Descriptor";

const InitialLink = sequelize.define('InitialLink', {
    description: {
      type: sequelize.DataTypes.TEXT,
      allowNull: false
    },
} );

InitialLink.belongsTo(
    Descriptor,
    {foreignKey: 'descriptorId',}
);