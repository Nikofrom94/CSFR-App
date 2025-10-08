import{sequelize} from "../datasource"

const AbilityCategory = sequelize.define('AbilityCategory', {
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
