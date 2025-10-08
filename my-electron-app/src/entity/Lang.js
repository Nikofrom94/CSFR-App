import{sequelize} from "../datasource"

const Lang = sequelize.define('Lang', {
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false
    },
});