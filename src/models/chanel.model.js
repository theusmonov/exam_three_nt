import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";


export class Chanel extends Model {}

Chanel.init({
    chanel_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    avatarka: {
        type: DataTypes.TEXT
    },
    chanel_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    chanel_link: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: "chanel",
    timestamps: true
})

// await sequelize.sync({ alter: true })