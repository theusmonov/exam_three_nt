import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";


await sequelize.sync()

export class Chanel extends Model {}
 
Chanel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    chanel_name: {
        type: DataTypes.STRING
    },
    chanel_link: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "chanel_table",
    timestamps: true
})

